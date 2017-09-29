export const addServer = server => {
  return {
    type: 'ADD_SERVER',
    server,
  }
};

export const selectServer = server => {
  return {
    type: 'SELECT_SERVER',
    server,
  }
};