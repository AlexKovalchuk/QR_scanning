const api = {
  getProductData: id => {
    let url = `http://10.13.16.85:4333/api/byCode?code=${id}`;
    return fetch(url, {method: 'get'})
      .then(result => result.json());
  }
};

export default api;
