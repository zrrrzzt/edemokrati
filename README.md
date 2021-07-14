[![Build Status](https://travis-ci.com/zrrrzzt/edemokrati.svg?branch=main)](https://travis-ci.com/zrrrzzt/edemokrati)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# edemokrati 

Node.js module for the eDemokrati solution from [Sem & Stenersen Prokom](http://www.prokom.no/).
This first release targets the public journal part of [Lokaldemokrati24:7](http://www.prokom.no/Produkter/Portal/Lokaldemokrati247/).

This module will only work with their old solution.

## Installation

From npm
```sh
$ npm install edemokrati
```

From GitHub
```sh
$ git clone git@github.com:zrrrzzt/edemokrati.git
```

cd into directory and run setup
```sh
$ npm run setup
```

## Methods

### journals.getDokumenter

Returns the attached documents for a specific journal.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**journalpostid**: The id for the journal **(required)**

```javascript
var edm = require('edemokrati')
var options = {
  'host': 'https://www.notodden.kommune.no',
  'journalpostid': '681504'
}

edm.journals.getDokumenter(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

### journals.getPostlisteArkivdeler

Returns a list of different archive units.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1449097200000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1449097200000)\/' **(required)**

**søkestreng**: Search string. **(optional)**

```javascript
var edm = require('edemokrati')
var options = {
  'host': 'https://www.notodden.kommune.no',
  'fraDato': '\/Date(1449097200000)\/',
  'tilDato': '\/Date(1449097200000)\/',
  'søkestreng': ''
}

edm.journals.getPostlisteArkivdeler(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

### journals.getPostlisteDokumenttyper

Returns a list of different document types.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**arkivdel**: Archive unit. "_" means all other alternatives is listed through the getPostlisteArkivdeler method **(required)**

**søkestreng**: Search string. **(optional)**

```javascript
var edm = require('edemokrati')
var options = {
  'host': 'https://www.notodden.kommune.no',
  'fraDato': '\/Date(1449097200000)\/',
  'tilDato': '\/Date(1449097200000)\/',
  'arkivdel': '_',
  'søkestreng': ''
}

edm.journals.getPostlisteDokumenttyper(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

### journals.getPostlisteSok

Returns a list of journals.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**arkivdel**: Archive unit. "_" means all other alternatives is listed through the getPostlisteArkivdeler method **(required)**

**dokumenttype**: Type of document. Incoming (I) or Outgoing (U). **(required)**

**søkestreng**: Search string. **(optional)**

```javascript
var edm = require('edemokrati')
var options = {
  'host': 'https://www.notodden.kommune.no',
  'fraDato': '\/Date(1449097200000)\/',
  'tilDato': '\/Date(1449097200000)\/',
  'søkestreng': 'bolig',
  'arkivdel': '_',
  'dokumenttype': 'I'
}

edm.journals.getPostlisteSok(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

### journals.getPostlisteObjekt

Returns one specific journal.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**id**: The id for the journal you want to see **(required)**

```javascript
var edm = require('edemokrati')
var options = {
  'host': 'https://www.notodden.kommune.no',
  'id': '17016007'
}

edm.journals.getPostlisteObjekt(options, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```
## Disclaimer

This is not an official API for eDemokrati. I'm not affiliated with Sem & Stenersen Prokom.