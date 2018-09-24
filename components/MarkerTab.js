import React, { Component } from 'react';

class MarkerTab extends Component {

  handleMarkerChange(map, googlemaps, center) {
    let marker = new googlemaps.Marker({
      position: new googlemaps.LatLng(center),
      animation: google.maps.Animation.DROP,
      icon: '/static/images/map-marker.png',
    });

    marker.setMap(map);
    map.panTo(marker.position);

  };


  render() {
    const cities = [{
      name: 'mumbai',
      center: {
        lat: 19.0760,
        lng: 72.8777
      }
    },{
      name: 'bangalore',
      center: {
        lat: 12.9716,
        lng: 77.5946
      }
    },{
      name: 'hyderabad',
      center: {
        lat: 17.3850,
        lng: 78.4867
      }
    },
    {
      name: 'chennai',
      center: {
        lat: 13.0827,
        lng: 80.2707
      }
    }]; 

    return (
      <div className="map__content-wrapper">
        {cities.map((city, index) => (<div className="city-wrapper" onClick={this.handleMarkerChange.bind(this, this.props.map, this.props.googlemaps, city.center)} key={`city-item-${index}`}>{city.name}</div>))}
        <style jsx>{`
          .map__content-wrapper {
            display: flex;
            width: 100%;
            z-index: 999999;
            background: green;
            position: relative;
            left: -50%;
            top: 10%;
            height: 100%;
          }
          .city-wrapper {
            margin: 10px;
            background: red;
            color: #fff;

          }
        `}</style>
      </div>
    )
  }
}

export default MarkerTab;