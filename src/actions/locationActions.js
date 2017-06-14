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
    data: coordinates
  }
}

const saveNewLocation = (location) => {
  return (dispatch) => {
    fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(location)
    })
      .then(response => response.json())
      .then(() => dispatch(fetchAllLocations()));
  }
}

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


export { fetchAllLocations, saveNewLocation, storeCoordinates }
