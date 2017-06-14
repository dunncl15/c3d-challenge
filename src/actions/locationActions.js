/* eslint-disable arrow-body-style */

require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations,
  };
};

const storeCoordinates = (coordinates) => {
  return {
    type: 'STORE_COORDINATES',
    data: coordinates,
  };
};

const currentCoordinates = (coordinates) => {
  return {
    type: 'SET_CURRENT_COORDS',
    data: coordinates,
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

const saveNewLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then(response => response.json())
      .then(() => dispatch(fetchAllLocations()));
  };
};

export { fetchAllLocations, saveNewLocation, storeCoordinates, currentCoordinates };
