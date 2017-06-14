import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [39.750809, -104.996810],
    };
  }

  render() {
    const { center } = this.state;
    const { coordinates } = this.props;
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={ center }
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
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
