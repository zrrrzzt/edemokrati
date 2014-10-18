'use strict';

'use strict';

var assert = require('assert')
  , getPostlister = require('../index').getPostlister;
  ;

describe('edemokrati - getPostlister', function(){

  it('Requires an opts object', function(done){

    getPostlister(function(err, data){
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

    getPostlister(opts, function(err, data){
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

    getPostlister(opts, function(err, data){
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

    getPostlister(opts, function(err, data){
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

    getPostlister(opts, function(err, data){
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

    getPostlister(opts, function(err, data){
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