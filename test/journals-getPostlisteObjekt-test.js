'use strict'

const tap = require('tap')
const getPostlisteObjekt = require('../lib/journals/getPostlisteObjekt')

tap.test('Requires options to be specified', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  getPostlisteObjekt(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.host to be specified', function (test) {
  const options = {
    host: false
  }
  const expectedErrorMessage = 'Missing required input: options.host'
  getPostlisteObjekt(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Requires options.id to be specified', function (test) {
  const options = {
    host: true,
    id: false
  }
  const expectedErrorMessage = 'Missing required input: options.id'
  getPostlisteObjekt(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})
