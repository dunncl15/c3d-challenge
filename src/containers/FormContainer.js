import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import { saveNewLocation } from '../actions/locationActions';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveNewLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
