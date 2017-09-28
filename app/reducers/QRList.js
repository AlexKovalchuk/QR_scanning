const list = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CODE_POINT':
      return [...state, action.code];
      break;
    default:
      return state;
  }
};
export default list;