const axios = require('axios');

const { url } = require('./config');

const axiosInstance = axios.create({
  baseUrl: url,
});

module.exports = axiosInstance;