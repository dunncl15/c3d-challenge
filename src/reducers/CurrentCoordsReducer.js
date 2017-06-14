/* eslint-disable no-case-declarations */

const CurrentCoordinates = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_COORDS':
      state = [];
      return state.concat(action.data);
    default:
      return state;
  }
};

export default CurrentCoordinates;
