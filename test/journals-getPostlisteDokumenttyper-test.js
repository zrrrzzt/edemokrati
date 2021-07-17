'use strict'

const tap = require('tap')
const getPostlisteDokumenttyper = require('../lib/journals/getPostlisteDokumenttyper')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  const options = {
    host: false
  }
  const expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.fraDato to be specified', function (test) {
  const options = {
    host: true,
    fraDato: false
  }
  const expectedErrorMessage = 'Missing required input: options.fraDato'
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.tilDato to be specified', function (test) {
  const options = {
    host: true,
    fraDato: true,
    tilDato: false
  }
  const expectedErrorMessage = 'Missing required input: options.tilDato'
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.arkivdel to be specified', function (test) {
  const options = {
    host: true,
    fraDato: true,
    tilDato: true,
    arkivdel: false
  }
  const expectedErrorMessage = 'Missing required input: options.arkivdel'
  getPostlisteDokumenttyper(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})
