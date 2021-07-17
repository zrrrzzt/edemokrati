'use strict'

const tap = require('tap')
const journals = require('../lib/journals')

tap.ok(journals.getDokumenter, 'getDokumenter - OK')

tap.ok(journals.getPostlisteArkivdeler, 'getPostlisteArkivdeler - OK')

tap.ok(journals.getPostlisteDokumenttyper, 'getPostlisteDokumenttyper - OK')

tap.ok(journals.getPostlisteObjekt, 'getPostlisteObjekt - OK')

tap.ok(journals.getPostlisteSok, 'getPostlisteSok - OK')
