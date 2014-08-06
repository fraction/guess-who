var gw = require('./lib/');

var guessWho = function (input, cb) {
  gw.callback = cb || function () {};
  gw.validate(input, function (err, usernames) {
    if (err) { throw err; }

    gw.readCensusNames(gw.config.namefilePaths, function (list) {
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
