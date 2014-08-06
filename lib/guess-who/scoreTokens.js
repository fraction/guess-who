// Come up with a score for the given tokens.
var scoreTokens = function (tokens, cb) {
  var score = 0;

  tokens.forEach(function (token) {
    var fuzzyScore = fuzzy.get(token);
    if (fuzzyScore !== null) {
      // If we get a match, score it.
      score += fuzzyScore[0][0] / tokens.length;
    } else {
      // If we don't get a match, penalize the token.
      score += -1;
    }
  });

  cb(score);
};

module.exports = scoreTokens;
