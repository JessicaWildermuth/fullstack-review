const axios = require('axios');
const config = require('../config.js');
const request = require('request');

let getReposByUsername = (username, callback) => {
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios(options)
    .then((response) => {

      if(response.error) {
        console.log(response.error)
      }
      callback(null, response.data);
    });
}

module.exports.getReposByUsername = getReposByUsername;