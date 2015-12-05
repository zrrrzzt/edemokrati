'use strict'

var tap = require('tap')
var getPostlisteSok = require('../lib/journals/getPostlisteSok')

tap.test('Requires options to be specified', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  var options = {
    host: false
  }
  var expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteSok(options, function (error, data) {
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
  getPostlisteSok(options, function (error, data) {
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
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.arkivdel to be specified', function (test) {
  var options = {
    host: true,
    fraDato: true,
    tilDato: true,
    arkivdel: false
  }
  var expectedErrorMessage = 'Missing required input: options.arkivdel'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.dokumenttype to be specified', function (test) {
  var options = {
    host: true,
    fraDato: true,
    tilDato: true,
    arkivdel: true,
    dokumenttype: false
  }
  var expectedErrorMessage = 'Missing required input: options.dokumenttype'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
