var assert = require('chai').assert;

var guessWho = require('../index');



describe('guess-who', function() {
  it('should extract all test names correctly', function (done) {
    this.timeout(50000);

    var testNames = {
      'christianbundy':      ['christian', 'bundy'],
      'johndoe':             ['john', 'doe'],
      'emmitt.a.riggin':     ['emmitt', 'a', 'riggin'],
      'meghannyunker':       ['meghann', 'yunker'],
      'huechadwick':         ['hue', 'chadwick'],
      'delphia.a.kimmer':    ['delphia', 'a', 'kimmer'],
      'lilymendel':          ['lily', 'mendel'],
      'natisha.pedroza':     ['natisha', 'pedroza'],
      'leoramauch':          ['leora', 'mauch'],
      'jamika.mcgranahan':   ['jamika', 'mcgranahan'],
      'celestinachittenden': ['celestina', 'chittenden'],
      'jadacwalson':         ['jada', 'c', 'walson'],
      'denese.d.eichler':    ['denese', 'd', 'eichler'],
      'marybethgant':        ['marybeth', 'gant'],
      'ashleamondy':         ['ashlea', 'mondy'],
      'brittanynowakowski':  ['brittany', 'nowakowski'],
      'nelliersepeda':       ['nellie', 'r', 'sepeda'],
      'anastasia.matchett':  ['anastasia', 'matchett'],
      'glory.mclester':      ['glory', 'mclester'],
      'wilburn.f.hinkson':   ['wilburn', 'f', 'hinkson'],
      'grace.k.baham':       ['grace', 'k', 'baham'],
      'haroldcrick':         ['harold', 'crick']
    };

    var nameArr = [];

    for (var name in testNames) {
      nameArr.push(name);
    }

    var remainder = nameArr.length;

    guessWho(nameArr, function (username, name) {
      var correct = name.every(function (part, partIndex) {
        if (testNames[username][partIndex] === part) {
          // This part matches the expected part.
          return true;
        } else {
          return false;
        }
      });

      if (correct) {
        // Iterate therough all of the names before we return `done()`.
        if (remainder === 1) {
          done();
        } else {
          remainder--;
        }
      } else {
        done(username + " didn't return " + testNames[username]);
      }
    });
  });

  it('should extract tokens', function (done) {
    gw.extractTokens('j', function () {
      done();
    });
  });

  it('should read census names', function (done) {
    var paths = [];

    gw.config.namefilePaths.forEach(function (path) {
      paths.push(__dirname + '/..' + path);
    });

    gw.readCensusNames(paths, function () {
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
