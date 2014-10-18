#edemokrati

Node.js module for eDemokrati

##Methods

###getPostlister

Get a list of journals from a given period.
 
Pass an options object with the params.

**host**: The url of the host **(required)**

**fraDato**: Search from date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**tilDato**: Search to date. Timestampformatted like '\/Date(1413410400000)\/' **(required)**

**arkivdel**: **(required)**

**dokumenttype**: Type of document. Received (I) or Outgoing (U). **(required)**

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

edm.getPostlister(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});
```