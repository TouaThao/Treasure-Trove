import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css';
//action
import { GET_MAP } from '../../redux/actions/MapAction'

//componenet 
import SearchBar from '../Map/SearchBar'

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
            showNewSearch :'' ,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            latLng: {
                lat: 44.986656,
                lng: -93.258133,
            },

            zoom: 12,
        };
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);

    }

    onChangeLinkName(newName){
        this.setState({
            showNewSearch : newName
        })
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: this.props.reduxState.map.mapLocation[props.name],
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    
    componentDidMount() {
        // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
        this.props.dispatch({ type: GET_MAP.GET });
    }

    // pushToFeedback = (event) => {
    //     event.preventDefault();
    //     // this.props.history.push('/feedback')
    //     console.log('Are we getting this stuff')
    // }

    handle = (event) => {
        console.log('did we get this?')
    }

    render() {
        console.log('catzilla', this.props.reduxState)
        let mapLatLong = this.props.reduxState.map.mapLocation;
        const lowercasedFilter = this.state.showNewSearch.toLowerCase();
        const filteredData = mapLatLong.filter(item => {
          if (Object.keys(item).some(key =>
            item.address.toLowerCase().includes(lowercasedFilter))){
                return item;
            }
          return Object.keys(item).some(key =>
            item.name.toLowerCase().includes(lowercasedFilter)
          );
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
                onChange = {this.onChangeLinkName.bind(this)}
                />
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
                            {/* <button onClick={this.handle}>Testing</button> */}
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

export default connect(mapStateToProps)(connectToGoogleMaps)

