// Grab every possible combinations of tokens from a string.
var extractTokens = function (str, cb) {
  for (var i = 1; i <= str.length; i++) {
    for (var j = i; j <= str.length; j++) {
      // Grab the first part of the name.
      var tokens =[
        str.slice(0, i)
      ];

      // Propose the next two possible parts.
      var nextSlices = [
        str.slice(i, j),
        str.slice(j, str.length)
      ];

      // If they exist (and aren't empty strings), add the part.
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
