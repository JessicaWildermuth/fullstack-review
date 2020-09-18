const axios = require('axios');
const config = require('../config.js');
const request = require('request');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
    // transformResponse: (data) => {
    //   // Do whatever you want to transform the data

    //   return data;
    // }]
  };
  var data = axios(options)
    .then((response) => {
      //only want certain fields of the data object
      if(response.error) {
        console.log(response.error)
      }
      callback(null, response.data);
    });
    // .catch((error) => {
    //   if(error.response) {
    //     callback(error.response);
    //   }
    // });
    return data;
}

module.exports.getReposByUsername = getReposByUsername;