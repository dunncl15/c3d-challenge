/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllMarkers from '../components/AllMarkers';
import { storeCoordinates } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ storeCoordinates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
