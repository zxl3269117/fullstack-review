const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  let options = {
    url: username + '/repos',
    baseURL: 'https://api.github.com/users/',
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options);
}

module.exports.getReposByUsername = getReposByUsername;