var request = require('supertest'),
    app = require('../server');

describe('homepage', function() {
  it('welcome the user', function(done) {
    request(app).get('/')
    .expect(200);
  });
});