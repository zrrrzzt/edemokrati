'use strict';

var request = require('request')
  , endpoint = '/Templates/eDemokrati/Services/eDemokratiService.svc/'
  ;


function getPostlisteArkivdeler(opts, callback){

  var reqOpts
    ;

  //If opts is a function we assume it's the callback
  if(typeof opts === 'function'){
    callback = opts;
  }

  if(typeof opts !== 'object'){
    return callback(new Error('Missing required opts object'), null);
  }

  if(!opts.host){
    return callback(new Error('Missing required param: host'), null);
  }

  if(!opts.fraDato){
    return callback(new Error('Missing required param: fraDato'), null);
  }

  if(!opts.tilDato){
    return callback(new Error('Missing required param: tilDato'), null);
  }

  //Fixes inconsistent original API
  opts.dato = opts.fraDato;

  reqOpts = {
    uri: opts.host + endpoint + '/GetPostlisteArkivdeler',
    method: 'POST',
    json:opts
  };

  request(reqOpts, function(error, response, body){
    if(error){
      return callback(error, null);
    } else {
      return callback(null, body.d);
    }
  })
}

function getPostlisteDokumenttyper(opts, callback){

  var reqOpts
    ;

  //If opts is a function we assume it's the callback
  if(typeof opts === 'function'){
    callback = opts;
  }

  if(typeof opts !== 'object'){
    return callback(new Error('Missing required opts object'), null);
  }

  if(!opts.host){
    return callback(new Error('Missing required param: host'), null);
  }

  if(!opts.fraDato){
    return callback(new Error('Missing required param: fraDato'), null);
  }

  if(!opts.tilDato){
    return callback(new Error('Missing required param: tilDato'), null);
  }

  if(!opts.arkivdel){
    return callback(new Error('Missing required param: arkivdel'), null);
  }

  //Fixes inconsistent original API
  opts.dato = opts.fraDato;

  reqOpts = {
    uri: opts.host + endpoint + '/GetPostlisteDokumenttyper',
    method: 'POST',
    json:opts
  };

  request(reqOpts, function(error, response, body){
    if(error){
      return callback(error, null);
    } else {
      return callback(null, body.d);
    }
  })
}

function getPostlisteSok(opts, callback){

  var reqOpts
    ;

  //If opts is a function we assume it's the callback
  if(typeof opts === 'function'){
    callback = opts;
  }

  if(typeof opts !== 'object'){
    return callback(new Error('Missing required opts object'), null);
  }

  if(!opts.host){
    return callback(new Error('Missing required param: host'), null);
  }

  if(!opts.fraDato){
    return callback(new Error('Missing required param: fraDato'), null);
  }

  if(!opts.tilDato){
    return callback(new Error('Missing required param: tilDato'), null);
  }

  if(!opts.arkivdel){
    return callback(new Error('Missing required param: arkivdel'), null);
  }

  if(!opts.dokumenttype){
    return callback(new Error('Missing required param: dokumenttype'), null);
  }

  reqOpts = {
    uri: opts.host + endpoint + '/GetPostlisteSøk',
    method: 'POST',
    json:opts
  };

  request(reqOpts, function(error, response, body){
    if(error){
      return callback(error, null);
    } else {
      return callback(null, body.d);
    }
  })
}

module.exports.getPostlisteSok = getPostlisteSok;

module.exports.getPostlisteArkivdeler = getPostlisteArkivdeler;

module.exports.getPostlisteDokumenttyper = getPostlisteDokumenttyper;