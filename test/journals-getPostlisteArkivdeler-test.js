'use strict'

var tap = require('tap')
var getPostlisteArkivdeler = require('../lib/journals/getPostlisteArkivdeler')

tap.test('Requires options to be specified', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  getPostlisteArkivdeler(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  var options = {
    host: false
  }
  var expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteArkivdeler(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.fraDato to be specified', function (test) {
  var options = {
    host: true,
    fraDato: false
  }
  var expectedErrorMessage = 'Missing required input: options.fraDato'
  getPostlisteArkivdeler(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.tilDato to be specified', function (test) {
  var options = {
    host: true,
    fraDato: true,
    tilDato: false
  }
  var expectedErrorMessage = 'Missing required input: options.tilDato'
  getPostlisteArkivdeler(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
