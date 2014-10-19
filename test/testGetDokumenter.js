'use strict';

var assert = require('assert')
  , getDokumenter = require('../index').getDokumenter;
;

describe('edemokrati - getDokumenter', function(){

  it('Requires an opts object', function(done){

    getDokumenter(function(err, data){
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

    getDokumenter(opts, function(err, data){
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

  it('Requires journalpostid is set', function(done){

    var opts = {
        host: true,
        journalpostid: false
      }
      ;

    getDokumenter(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: journalpostid/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

});