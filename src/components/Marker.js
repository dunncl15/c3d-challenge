/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

const MapMarker = ({ location, name, storeCoordinates }) => {
  const icon = L.icon({
    iconUrl: tealdot,
    iconSize: [15, 15],
  });

  return (
    <div className="marker-container">
      <Marker
        onClick={() => storeCoordinates(location)}
        position={location}
        icon={icon}
      >
        <Tooltip
          sticky
          interactive
        >
          <div>
            <h4>{name}</h4>
          </div>
        </Tooltip>
      </Marker>
    </div>
  );
};

MapMarker.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  storeCoordinates: PropTypes.func.isRequired,
};

export default MapMarker;
