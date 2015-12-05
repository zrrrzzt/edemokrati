'use strict'

var tap = require('tap')
var getPostlisteDokumenttyper = require('../lib/journals/getPostlisteDokumenttyper')

tap.test('Requires options to be specified', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  var options = {
    host: false
  }
  var expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteDokumenttyper(options, function (error, data) {
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
  getPostlisteDokumenttyper(options, function (error, data) {
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
  getPostlisteDokumenttyper(options, function (error, data) {
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
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
