export const Coordinates = (state = [], action) => {
  switch (action.type) {
    case 'STORE_COORDINATES':
      const index = state.indexOf(action.data);
      if (index !== -1) {
        return state.filter((arr, i) => i !== index);
      } else {
        return state.concat([action.data]);
      }
    default:
      return state;
  }
}
