const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

describe('Sample Spec', () => {
  it('should return url of auth', function(done) {
    frisby
      .get('https://api.github.com')
      .expect('json', 'authorizations_url', 'https://api.github.com/authorizations')
      .done(done);
  });
  it('should return url of auth', function(done) {
    frisby
      .get('https://api.github.com')
      .expect('json', 'authorizations_url', 'https://api.github.com/authorizations')
      .done(done);
  });
});

describe('Sample Spec', () => {
  it('should return url of auth', function(done) {
    frisby
      .get('https://api.github.com')
      .expect('json', 'authorizations_url', 'https://api.github.com/authorizations')
      .done(done);
  });
  it('should return url of auth', function(done) {
    frisby
      .get('https://api.github.com')
      .expect('json', 'authorizations_url', 'https://api.github.com/authorizations')
      .done(done);
  });
});
