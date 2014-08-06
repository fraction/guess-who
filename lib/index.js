global.partition = require('./partition');

global.fuzzy = (require('fuzzyset.js') && FuzzySet({
  gramSizeLower: 1,
  gramSizeUpper: 2
}));

global.gw = {};

var props = [
  'config',
  'extractName',
  'extractTokens',
  'isBetter',
  'readCensusNames',
  'scoreTokens',
  'validate'
];

// Require each of our properties.
props.forEach(function (prop) {
  gw[prop] = require('./guess-who/' + prop);
});

module.exports = gw;
