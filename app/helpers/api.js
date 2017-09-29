const api = {
  getProductData: (serverId, productId) => {
    let url = `${serverId}/api/byCode?code=${productId}`;
    return fetch(url, {method: 'get'})
      .then(result => result.json());
  }
};

export default api;
