'use strict';

var assert = require('assert')
  , getPostlisteDokumenttyper = require('../index').getPostlisteDokumenttyper;
;

describe('edemokrati - getPostlisteDokumenttyper', function(){

  it('Requires an opts object', function(done){

    getPostlisteDokumenttyper(function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required opts object/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Requires host is set', function(done){

    var opts = {
        host:false
      }
      ;

    getPostlisteDokumenttyper(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: host/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Requires fraDato is set', function(done){

    var opts = {
        host: true,
        fraDato: false
      }
      ;

    getPostlisteDokumenttyper(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: fraDato/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Requires tilDato is set', function(done){

    var opts = {
        host: true,
        fraDato: true,
        tilDato: false
      }
      ;

    getPostlisteDokumenttyper(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: tilDato/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Requires arkivdel is set', function(done){

    var opts = {
        host: true,
        fraDato: true,
        tilDato: true,
        arkivdel: false
      }
      ;

    getPostlisteDokumenttyper(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: arkivdel/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});