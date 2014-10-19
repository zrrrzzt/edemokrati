'use strict';

var assert = require('assert')
  , getPostlisteSok = require('../index').getPostlisteSok;
  ;

describe('edemokrati - getPostlisteSok', function(){

  it('Requires an opts object', function(done){

    getPostlisteSok(function(err, data){
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

    getPostlisteSok(opts, function(err, data){
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

    getPostlisteSok(opts, function(err, data){
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

    getPostlisteSok(opts, function(err, data){
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

    getPostlisteSok(opts, function(err, data){
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

  it('Requires dokumenttype is set', function(done){

    var opts = {
        host: true,
        fraDato: true,
        tilDato: true,
        arkivdel: true,
        dokumenttype: false

      }
      ;

    getPostlisteSok(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: dokumenttype/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});