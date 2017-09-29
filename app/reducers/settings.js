const settings = (state={login: '', password: '', server: ''}, action) => {
  switch(action.type){
    case 'SELECT_SERVER':
      return {...state, server: action.server};
    default:
      return state;
  }
};

export default settings;
