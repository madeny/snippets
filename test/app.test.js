var request = require('supertest'),
	app = require('../app');

describe('homepage', function() {
	it('Welcome to the user', function(done) {
		request(app).get("/")
		.expect(200)
		.expect(/Hello fine user/, done);
	});
});