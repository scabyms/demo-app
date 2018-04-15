const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions


it ('should return a status of 200', function (done) {
  frisby
    .get('https://api.github.com')
    .expect('json', 'authorizations_url', 'https://api.github.com/authorizations')
    .done(done);
});
