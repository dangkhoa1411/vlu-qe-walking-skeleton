function login(username, password) {
  return username === 'admin' && password === '1234';
}

// Cho phép Jest (Node.js) import, đồng thời không gây lỗi trên trình duyệt
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}
