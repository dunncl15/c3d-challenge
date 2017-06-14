import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from '../containers/AllMarkers';

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [39.750809, -104.996810],
      zoom: 4,
    };
  }

  render() {
    const { center, zoom } = this.state;
    const { coordinates, currentCoords } = this.props;
    return (
      <div className="map-container">
        <Map
          animate={ true }
          useFlyTo={ true }
          className="map"
          zoomControl={false}
          center={ currentCoords.length ? currentCoords : center }
          zoom={ currentCoords.length ? 5 : zoom }
          maxBounds={[[180, -180], [-180, 180]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers />
          <Polygon
            positions={coordinates}
          />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
