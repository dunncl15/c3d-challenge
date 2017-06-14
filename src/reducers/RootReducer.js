import { combineReducers } from 'redux';
import { Locations } from './LocationsReducer';
import { selectedCoordinates } from './coordinatesReducer';

const RootReducer = combineReducers({
  Locations,
  selectedCoordinates,
});

export default RootReducer;
