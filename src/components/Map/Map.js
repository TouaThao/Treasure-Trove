import React, { Component } from 'react'
import {  withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {  Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css';
//action
import { GET_MAP } from '../../redux/actions/MapAction'

//componenet 
import SearchBar from '../Map/SearchBar'
import '../../styles/main.css'

//Child componenet


const mapStateToProps = state => ({
    user: state.user,
    reduxState: state,
    map: state.map
});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: true,
            search: '',
            vendor: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            latLng: {
                lat: 44.986656,
                lng: -93.258133,
            },

            zoom: 12,
        };

    }

    handleSearchBar(object){
        this.setState({
            search : object.target.value
        })
    }

    handelVendorSelector(object){
        this.setState({
            vendor: object.target.value
        })
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: this.props.reduxState.map.mapLocation[props.name],
            activeMarker: marker,
            showingInfoWindow: true,
            link: !this.state.link
        });
    }

    handle = (props) => {
        console.log('click')
    }
    

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    }
    
    componentDidMount() {
        // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
        this.props.dispatch({ type: GET_MAP.GET });
    }


    handleSendToFeedBackPage = (event)=>{
        console.log('click', event.target);
        this.props.history.push('/location/' + event.target.value)
    
      }

    //   handleShowLink = () => {
    //     this.setState({
    //         link: !this.state.link
    //     });
    //   }
    render() { 
        let linkB = null;
        if(this.props.user.user_type === 'viewer'){
            linkB =       
            <button id="feedbacklocation"
            value={this.state.selectedPlace.id}
             onClick={this.handleSendToFeedBackPage}
             hidden={(this.state.link)} 
             >Give FeedBack</button>
        } else{
            linkB = ''
        }
        console.log('dragonzilla', this.props.user.user_type)
        console.log('catzilla', this.props.reduxState)
        console.log('wetestingvendorisonhere', this.state)
        console.log('KingKong', this.props.reduxState.map.mapLocation)
        let mapLatLong = this.props.reduxState.map.mapLocation;
        const lowercasedFilter = this.state.search.toLowerCase();
        const vendor = this.state.vendor.toLowerCase();
        const filteredData = mapLatLong.filter(item => {
          if (Object.keys(item).some(key =>
            item.vendor.toLowerCase().includes(vendor))){
                if (Object.keys(item).some(key =>
                  item.address.toLowerCase().includes(lowercasedFilter))){
                      return item;
                  }
                return Object.keys(item).some(key =>
                  item.name.toLowerCase().includes(lowercasedFilter)
                );
            }
        });

        let mapMarker = filteredData.map(((place, i) => {
            return (
                <Marker key={i}
                    name={place.index}
                    visible={true}
                    onClick={this.onMarkerClick}
                    position={{ lng: place.longitude, lat: place.latitude }}>
                </Marker>
            )
        }))

        return (
            <div className="mapContainer">
            
                <SearchBar 
                searchHandler = {this.handleSearchBar.bind(this)}
                vendorHandler = {this.handelVendorSelector.bind(this)}
                />
                 {linkB}
                 <br></br>
                <Map
                    onClick={this.onMapClick}
                    google={this.props.google}
                    zoom={this.state.zoom}
                    initialCenter={this.state.latLng}
                >
                
                    {mapMarker}
                    
                    <InfoWindow
                        
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                    
                        <div>
                       
                            <h4>{this.state.selectedPlace.name}</h4>
                            <h4>{this.state.selectedPlace.address}</h4>
                            <h4>{this.state.selectedPlace.city}</h4>
                            <h4>{this.state.selectedPlace.vendor}</h4>
                        </div>
                    </InfoWindow>
                    
                    
                </Map>
                
            </div>
        )
    }
}

const connectToGoogleMaps = GoogleApiWrapper({
    apiKey: ('AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M')
})(MapContainer)

export default withRouter(connect(mapStateToProps)(connectToGoogleMaps))

