import React, { Component } from 'react';
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

export default App;
