import React, { Component } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../config';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {

	constructor() {
		super();
	}

	handleGoogleMapApi(google) {
		console.log(google);
	}

	static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 17
  };

	render() {
		return (
			<div className="map-canvas">
				<GoogleMapReact 
					bootstrapURLKeys={{ key: 'AIzaSyCmOvoeTx4ATWaOJEdD8n9vYzajRjipknk' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={ this.handleGoogleMapApi.bind(this) }
				>
				</GoogleMapReact>
				<style jsx>{`
					.map-canvas {
						width: 100%;
						height: 100vh;
					}
				`}</style>
			</div>
		)
	}
}

export default GoogleMap;