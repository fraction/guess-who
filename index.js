var gw = require('./lib/');

var guessWho = function (input, cb) {
  gw.callback = cb || function () {};
  gw.validate(input, function (err, usernames) {
    if (err) { throw err; }

    var paths = [];

    gw.config.namefilePaths.forEach(function (path) {
      paths.push(__dirname + path);
    });

    gw.readCensusNames(paths, function (list) {
      // Add each name to our fuzzyset dictionary.
      list.forEach(function (item) {
        fuzzy.add(item.name);
      });

      var letters = gw.config.alphabet.split('');
      letters.forEach(function (letter) {
        fuzzy.add(letter);
      });

      usernames.forEach(gw.extractName);
    });
  });
};

module.exports = guessWho;
