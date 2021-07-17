'use strict'

const tap = require('tap')
const getPostlisteSok = require('../lib/journals/getPostlisteSok')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  const options = {
    host: false
  }
  const expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.fraDato to be specified', function (test) {
  const options = {
    host: true,
    fraDato: false
  }
  const expectedErrorMessage = 'Missing required input: options.fraDato'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.tilDato to be specified', function (test) {
  const options = {
    host: true,
    fraDato: true,
    tilDato: false
  }
  const expectedErrorMessage = 'Missing required input: options.tilDato'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
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
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.dokumenttype to be specified', function (test) {
  const options = {
    host: true,
    fraDato: true,
    tilDato: true,
    arkivdel: true,
    dokumenttype: false
  }
  const expectedErrorMessage = 'Missing required input: options.dokumenttype'
  getPostlisteSok(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
