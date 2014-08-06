var assert = require('chai').assert;

var guessWho = require('../index');



describe('guess-who', function() {
  it('should parse johndoe correctly', function (done) {
    this.timeout(50000);

    guessWho('johndoe', function (username, name) {
      if (name[0] === 'john' && name[1] === 'doe') {
        done();
      } else {
        done("johndoe didn't return 'john doe'");
      }
    });
  });

  it('should extract tokens', function (done) {
    gw.extractTokens('j', function () {
      done();
    });
  });

  it('should read census names', function (done) {
    gw.readCensusNames(gw.config.namefilePaths, function () {
      done();
    });
  });

  it('should validate johndoe', function (done) {
    gw.validate('johndoe', function (err) {
      done();
    });
  });

  it('should not validate an empty string', function (done) {
    gw.validate('', function (err) {
      done();
    });
  });

  it('should not validate an empty array', function (done) {
    gw.validate([], function (err) {
      done();
    });
  });
});
