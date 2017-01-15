var request = require('supertest'),
	app = require('../server');

describe('title 3D Rotating Navigation | CodyHouse', function() {
	it('Credit', function(done) {
		request(app).get("/")
		.expect(200)
		.expect(/Credit/, done);
	});
});