const serverList = (state=[], action) => {
  switch(action.type){
    case 'ADD_SERVER':
      return [...state, action.server];
    default:
      return state;
  }
};

export default serverList;
