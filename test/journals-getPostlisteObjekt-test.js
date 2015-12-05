'use strict'

var tap = require('tap')
var getPostlisteObjekt = require('../lib/journals/getPostlisteObjekt')

tap.test('Requires options to be specified', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  getPostlisteObjekt(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  var options = {
    host: false
  }
  var expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteObjekt(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.id to be specified', function (test) {
  var options = {
    host: true,
    id: false
  }
  var expectedErrorMessage = 'Missing required input: options.id'
  getPostlisteObjekt(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
