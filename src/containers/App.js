/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllLocations } from '../actions/locationActions';
import App from '../components/App';
import '../style/App.css';

const mapStateToProps = (state) => {
  return {
    locations: state.Locations.data,
    coordinates: state.Coordinates,
    currentCoords: state.CurrentCoordinates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
