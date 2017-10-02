const api = {
  getProductData: (serverId, productId) => {
    let url = `${serverId}/api/byCode?code=${productId}`;
    let urlTest = `http://10.13.16.85:4333/api/byCode?code=${productId}`;
    return fetch(url, {method: 'get'})
    // return fetch(urlTest, {method: 'get'})
      .then(result => result.json());
  }
};

export default api;
