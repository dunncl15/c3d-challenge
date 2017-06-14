/* eslint-disable no-unused-vars, arrow-body-style, react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import MapMarker from './Marker';

const AllMarkers = ({ locations, storeCoordinates }) => {
  const markerArray = locations.map((marker, i) => {
    return (
      <MapMarker
        key={i}
        location={[+marker.lat, +marker.lng]}
        name={marker.name}
        storeCoordinates={storeCoordinates}
      />
    );
  });

  return (
    <div className="paths-container">
      { markerArray }
    </div>
  );
};

AllMarkers.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  storeCoordinates: PropTypes.func.isRequired,
};

export default AllMarkers;
