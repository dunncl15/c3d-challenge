import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import { saveNewLocation, currentCoordinates } from '../actions/locationActions';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveNewLocation, currentCoordinates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
