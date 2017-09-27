const list = (state = {work: true}, action) => {
  switch (action.type) {
    case 'ADD_POINT':
      return {point: true};
      break;
    default:
      return state;
  }
};
export default list;