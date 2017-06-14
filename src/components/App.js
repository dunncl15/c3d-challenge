import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeafletMap from '../components/LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {

  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {
    const { locations, coordinates, currentCoords } = this.props;
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap
          locations={locations}
          coordinates={coordinates}
          currentCoords={currentCoords}
        />
      </div>
    );
  }
}

App.propTypes = {
  fetchAllLocations: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default App;
