import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '150%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'BGeaxuT5KZRn2K11qf88THzLDi2LKFeJZB0pNY-0wvI'
})(MapContainer);