'use strict'

var request = require('request')
var config = require('../../config')

function getDokumenter (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'), null)
  }

  if (!options.host) {
    return callback(new Error('Missing required input: options.host'), null)
  }

  if (!options.journalpostid) {
    return callback(new Error('Missing required input: options.journalpostid'), null)
  }

  var requestOptions = {
    uri: options.host + config.TEMPLATES_ENDPOINT + 'GetDokumenter',
    method: 'POST',
    json: options
  }

  request(requestOptions, function (error, response, body) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, body.d)
    }
  })
}

module.exports = getDokumenter
