// test/test.js
const request = require('supertest');
const app = require('../index'); // Assuming your Express app is defined in index.js

describe('GET /', function() {
  it('responds with text "Hello, world!"', function(done) {
    request(app)
      .get('/')
      .expect('Hello, world!')
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

