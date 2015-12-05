'use strict'

var tap = require('tap')
var getDokumenter = require('../lib/journals/getDokumenter')

tap.test('Requires options to be specified', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  getDokumenter(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  var options = {
    host: false
  }
  var expectedErrorMessage = 'Missing required input: options.host'
  getDokumenter(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.journalpostid to be specified', function (test) {
  var options = {
    host: true,
    journalpostid: false
  }
  var expectedErrorMessage = 'Missing required input: options.journalpostid'
  getDokumenter(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
