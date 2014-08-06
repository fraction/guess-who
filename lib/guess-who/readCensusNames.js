var censusNames = require('../census-names');

// Add all names from our namefiles to `list` and run a callback.
var readCensusNames = function (paths, cb) {
  // We'll collect our `item` objects here.
  var list = [];

  if (typeof paths === 'undefined') {
    throw Error('Namefile paths must be defined');
  }

  // Read each of our files.
  censusNames.readFiles(paths, {
    onLine: function (item) {
      // Push the name item (name, frequencies, and rank) to `list`.
      list.push(item);
    },
    onLastFile: function() {
      cb(list);
    }
  });
};

module.exports = readCensusNames;
