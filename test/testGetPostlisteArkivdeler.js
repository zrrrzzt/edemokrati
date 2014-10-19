'use strict';

'use strict';

var assert = require('assert')
  , getPostlisteArkivdeler = require('../index').getPostlisteArkivdeler;
;

describe('edemokrati - getPostlisteArkivdeler', function(){

  it('Requires an opts object', function(done){

    getPostlisteArkivdeler(function(err, data){
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

    getPostlisteArkivdeler(opts, function(err, data){
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

    getPostlisteArkivdeler(opts, function(err, data){
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

    getPostlisteArkivdeler(opts, function(err, data){
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

});