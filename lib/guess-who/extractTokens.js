// Grab every possible combinations of tokens from a string.
var extractTokens = function (str, cb) {
  for (var i = 1; i <= str.length; i++) {
    for (var j = i; j <= str.length; j++) {
      var tokens =[
        str.slice(0, i)
      ];

      var nextSlices = [
        str.slice(i, j),
        str.slice(j, str.length)
      ];

      nextSlices.forEach(function (slice) {
        if (slice.length) {
          tokens.push(slice);
        }
      })

      cb(tokens);
    }
  }
};

module.exports = extractTokens;
