import React, { Component } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {

  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {
    const { locations, coordinates } = this.props;
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap
          locations={locations}
          coordinates={coordinates}
        />
      </div>
    );
  }
}

export default App;
