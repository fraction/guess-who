// Tests whether or not a match is better than the best match.
var isBetter = function (score, length, best) {
  if (score >= best.score) {
    // If they're the same score...
    if (score == best.score) {
      // ... go with the simpler option.
      if (length <= best.count) {
        return true;
      }
    // They aren't the same score – we have a new winner!
    } else {
      return true;
    }
  }
};

module.exports = isBetter;
