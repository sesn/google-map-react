import React, { Component } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../config';
import GoogleMapReact from 'google-map-react';
import MarkerTab from './MarkerTab';

class GoogleMap extends Component {

	constructor() {
		super();
		this.state = {
			googleApiReady: false,
			map: null,
			googlemaps: null,
			center: { 
				lat : 19.0760,
				lng : 72.8777
			}
		};
	}

	handleGoogleMapApi(google) {
		if(google.map && google.maps) {
			this.setState({
				googleApiReady: true,
				map: google.map,
				googlemaps: google.maps
			});
			const styles = [{
				stylers: [{
						saturation: -100
				}]
			}];
			const styledMap = new google.maps.StyledMapType(styles, {
				name: "Styled Map"
			});
			const map = google.map;
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');
	
			let marker = new google.maps.Marker({
				position: new google.maps.LatLng(this.state.center),
				animation: google.maps.Animation.DROP,
				icon: '/static/images/map-marker.png',
			});
	
			marker.setMap(map);
			map.panTo(marker.position);
		} 

	}

	
	static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 17
  };

	render({ googleApiReady, googlemaps, map} = this.state) {

		const options = {
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: true,
			streetViewControl: false,
			overviewMapControl: false,
			rotateControl: true,
			scrollwheel: false,
		};

		return (
			<div className="map-canvas">
				<GoogleMapReact 
					bootstrapURLKeys={{ key: 'AIzaSyCmOvoeTx4ATWaOJEdD8n9vYzajRjipknk' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={options}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={ this.handleGoogleMapApi.bind(this) }
				>
					{googleApiReady && (
						<MarkerTab 
							map={map}
							googlemaps={googlemaps}
						/>
					)}
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