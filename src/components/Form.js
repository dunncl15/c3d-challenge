import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
    };
  }

  submitForm(e, data) {
    e.preventDefault();
    this.validateInputs(data);
  }

  validateInputs(data) {
    const { lat, lng } = data;
    const { saveNewLocation, currentCoordinates } = this.props;
    if (data.name && this.checklat(lat) && this.checklng(lng)) {
      saveNewLocation(data);
      currentCoordinates([parseFloat(lat), parseFloat(lng)]);
      this.clearInputs();
    } else {
      this.setState({ error: 'Please enter a valid name and lat/lng coordinates.' });
    }
  }

  checklat(lat) {
    return (lat.length >= 7 && parseFloat(lat) >= -90 && parseFloat(lat) <= 90);
  }

  checklng(lng) {
    return (lng.length >= 7 && parseFloat(lng) >= -180 && parseFloat(lng) <= 180);
  }

  clearInputs() {
    this.name.value = '';
    this.lat.value = '';
    this.lng.value = '';
  }

  render() {
    const { error } = this.state;
    return (
      <form className="form">
        <label htmlFor="name">
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="lat">
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
            name="lat"
          />
        </label>
        <label htmlFor="lng">
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"
            name="lng"
          />
        </label>
        <button
          type="submit"
          onClick={e => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value,
          })}
        >
          Save
        </button>
        { error && <p>{ error }</p>}
      </form>
    );
  }
}

Form.propTypes = {
  saveNewLocation: PropTypes.func.isRequired,
  currentCoordinates: PropTypes.func.isRequired,
};

export default Form;
