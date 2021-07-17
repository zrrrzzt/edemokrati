'use strict'

const request = require('request')
const config = require('../../config')

function getPostlisteArkivdeler (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'), null)
  }

  if (!options.host) {
    return callback(new Error('Missing required input: options.host'), null)
  }

  if (!options.fraDato) {
    return callback(new Error('Missing required input: options.fraDato'), null)
  }

  if (!options.tilDato) {
    return callback(new Error('Missing required input: options.tilDato'), null)
  }

  // Fixes inconsistent original API
  options.dato = options.fraDato

  const requestOptions = {
    uri: options.host + config.TEMPLATES_ENDPOINT + 'GetPostlisteArkivdeler',
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

module.exports = getPostlisteArkivdeler
