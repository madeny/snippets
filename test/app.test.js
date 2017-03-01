var request = require('supertest');
var app = require('../server');

describe('GET /', function(){
  it('should repsond with 200', function(done){
      request(app.app)
      .get('/')
      .expect(200, done.fail);
  });
});