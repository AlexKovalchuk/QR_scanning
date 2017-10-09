const settings = (state={login: '', password: '', server: 'http://10.13.16.85:4333'}, action) => {
  switch(action.type){
    case 'SELECT_SERVER':
      return {...state, server: action.server};
    default:
      return state;
  }
};

export default settings;
