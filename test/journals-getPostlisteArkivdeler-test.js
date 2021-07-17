'use strict'

const tap = require('tap')
const getPostlisteArkivdeler = require('../lib/journals/getPostlisteArkivdeler')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  getPostlisteArkivdeler(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  const options = {
    host: false
  }
  const expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteArkivdeler(options, function (error, data) {
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
  getPostlisteArkivdeler(options, function (error, data) {
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
  getPostlisteArkivdeler(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})
