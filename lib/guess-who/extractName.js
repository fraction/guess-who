// Extract a name from a username – the bread and butter of the program.
extractName = function (username) {
  var strings = username.split(/[^a-zA-Z]/);
  var name = [];

  strings.forEach(function (str) {
    // Initialize easy-to-beat "high score".
    var best = {
      score: 0,
      parts: [],
      count: 0
    };

    // Extract the tokens, score them, and check to see if they're better.
    gw.extractTokens(str, function (tokens) {
      gw.scoreTokens(tokens, function (score) {
        if (gw.isBetter(score, tokens.length, best)) {
          best = {
            score: score,
            parts: tokens,
            count: tokens.length
          };
        }
      });
    });

    // Save the best parts to the name.
    best.parts.forEach(function (part) {
      name.push(part);
    });
  });

  // Run the callback the program was initalized with.
  gw.callback(username, name);
};

module.exports = extractName;
