#edemokrati

Node.js module for eDemokrati

##Methods

###getPostlisteArkivdeler

Returns a list of different archive units.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**søkestreng**: Search string. **(optional)**

```
var edm = require('edemokrati')
  , opts = {
      'host': 'https://www.porsgrunn.kommune.no',
      'fraDato': '\/Date(1413410400000)\/',
      'tilDato': '\/Date(1413410400000)\/',
      'søkestreng': ''
    }
  ;

edm.getPostlisteArkivdeler(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});
```

###getPostlisteDokumenttyper

Returns a list of different document types.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**arkivdel**: Archive unit. "_" means all other alternatives is listed through the getPostlisteArkivdeler method **(required)**

**søkestreng**: Search string. **(optional)**

```
var edm = require('edemokrati')
  , opts = {
      'host': 'https://www.porsgrunn.kommune.no',
      'fraDato': '\/Date(1413410400000)\/',
      'tilDato': '\/Date(1413410400000)\/',
      'arkivdel': '_',
      'søkestreng': ''
    }
  ;

edm.getPostlisteDokumenttyper(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});
```

###getPostlisteSok

Returns a list of journals.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**arkivdel**: Archive unit. "_" means all other alternatives is listed through the getPostlisteArkivdeler method **(required)**

**dokumenttype**: Type of document. Incoming (I) or Outgoing (U). **(required)**

**søkestreng**: Search string. **(optional)**

```
var edm = require('edemokrati')
  , opts = {
      'host': 'https://www.porsgrunn.kommune.no',
      'fraDato': '\/Date(1413410400000)\/',
      'tilDato': '\/Date(1413410400000)\/',
      'søkestreng': 'Kragerø',
      'arkivdel': '_',
      'dokumenttype': 'I'
    }
  ;

edm.getPostlisteSok(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});
```

###getPostlisteObjekt

Returns one specific journal.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**id**: The id for the journal you want to see **(required)**

```
var edm = require('edemokrati')
  , opts = {
      'host': 'https://www.porsgrunn.kommune.no',
      'id': '267478'
    }
  ;

edm.getPostlisteObjekt(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});
```