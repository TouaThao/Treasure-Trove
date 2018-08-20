import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css';

//action
import { GET_MAP } from '../../redux/actions/MapAction'

//componenet 
import SearchBar from '../Map/SearchBar'


const mapStateToProps = state => ({
    user: state.user,
    reduxState: state,
    filter: state,
});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onMarkerClick = (props, marker, e) => {
        this.setState({
            // selectedPlace: props,
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


    render() {

        console.log('catzilla', this.props.reduxState)
        let mapLatLong = this.props.reduxState.map.mapLocation;
        let mapMarker = mapLatLong.map(((mapLatLong, i) => {
            return (
                <Marker key={i}
                    name={i}
                    onClick={this.onMarkerClick}
                    position={{ lng: mapLatLong.longitude, lat: mapLatLong.latitude }}>
                </Marker>
            )
        }))
        console.log('we are testing stuff',this.filter)
        return (
            <div className="mapContainer">
                <SearchBar/>
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
                            <h3>{this.state.selectedPlace.name}</h3>
                            <h3>{this.state.selectedPlace.address}</h3>
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

