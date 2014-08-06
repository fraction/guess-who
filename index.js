var gw = require('./lib/');

// Takes either a string or an array as input.
var guessWho = function (input, cb) {
  // If the callback isn't defined, define one.
  gw.callback = cb || function () {};
  
  // Validate the input
  gw.validate(input, function (err, usernames) {
    if (err) { throw err; }

    var paths = [];

    // Resolve for relative path names.
    gw.config.namefilePaths.forEach(function (path) {
      paths.push(__dirname + path);
    });

    gw.readCensusNames(paths, function (list) {
      // Add each name to our fuzzyset dictionary.
      list.forEach(function (item) {
        fuzzy.add(item.name);
      });
      
      // Add each letter of the alphabet as a name (initials).
      var letters = gw.config.alphabet.split('');
      letters.forEach(function (letter) {
        fuzzy.add(letter);
      });

      // Extract a name from the username(s)
      usernames.forEach(gw.extractName);
    });
  });
};

module.exports = guessWho;
