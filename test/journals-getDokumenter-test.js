'use strict'

const tap = require('tap')
const getDokumenter = require('../lib/journals/getDokumenter')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  getDokumenter(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  const options = {
    host: false
  }
  const expectedErrorMessage = 'Missing required input: options.host'
  getDokumenter(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.journalpostid to be specified', function (test) {
  const options = {
    host: true,
    journalpostid: false
  }
  const expectedErrorMessage = 'Missing required input: options.journalpostid'
  getDokumenter(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})
