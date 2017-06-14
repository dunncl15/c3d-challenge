import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  submitForm(e, data) {
    e.preventDefault();
    this.validateInputs(data);
  }

  validateInputs(data) {
    const { lat, lng } = data;
    if (data.name && this.checklat(lat) && this.checklng(lng)) {
      this.props.saveNewLocation(data);
      this.clearInputs();
    } else {
      this.setState({ error: 'Please enter a valid name and lat/lng coordinates.' });
    }
  }

  checklat(lat) {
    if (lat.length >= 7 && -90 <= parseFloat(lat) && parseFloat(lat) <= 90) {
      return true;
    }
  }

  checklng(lng) {
    if (lng.length >= 7 && -180 <= parseFloat(lng) && parseFloat(lng) <= 180) {
      return true;
    }
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
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"
          />
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
        { error && <p>{ error }</p>}
      </form>
    );
  }
}


export default Form;
