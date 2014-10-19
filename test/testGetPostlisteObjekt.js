'use strict';

var assert = require('assert')
  , getPostlisteObjekt = require('../index').getPostlisteObjekt;
;

describe('edemokrati - getPostlisteObjekt', function(){

  it('Requires an opts object', function(done){

    getPostlisteObjekt(function(err, data){
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

    getPostlisteObjekt(opts, function(err, data){
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

  it('Requires id is set', function(done){

    var opts = {
        host: true,
        id: false
      }
      ;

    getPostlisteObjekt(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: id/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});