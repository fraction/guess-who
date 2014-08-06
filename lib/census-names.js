var lineReader = require('line-reader');

var cn = {
  // Read a line of the namefile.
  readLine: function (line) {
    // Matches name, relative frequency, cumulative frequncy, and rank.
    // JOHN           3.271  6.589      2
    var regex = /([A-Z]+) +([0-9]+\.[0-9]+) +([0-9]+\.[0-9]+) +([0-9]+)/;

    var matches = regex.exec(line);

    var item = {         // Example:
      name: matches[1],  // name:     JOHN
      freq: {
        rel: matches[2], // freq.rel: 3.271
        cum: matches[3]  // freq.cum: 6.589
      },
      rank: matches[4]   // rank:     2
    };

    // Make name lowercase for smaller memory footprint.
    item.name = item.name.toLowerCase();

    return item;
  },
  // Read an entire file.
  readFile: function (path, cb) {
    var self = this;
    cb = self.defineFunctions(cb);

    lineReader.eachLine(path, function(line, last) {
      // Pass the item to the "line" callback.
      var item = self.readLine(line);
      cb.onLine(item);
      if (last) {
        cb.onLastLine(path);
      }
    });
  },
  // Read multiple entire files.
  readFiles: function (paths, cb) {
    var self = this;
    cb = self.defineFunctions(cb);

    var remaining = paths.length;

    paths.forEach(function (path) {
      self.readFile(path, {
        onLine: cb.onLine,
        onLastLine: function () {
          // Run the last callback regardless.
          cb.onLastLine(path);

          // Check to see how many are remaining.
          if (remaining > 1) {
            remaining--;
          } else {
            // If that was the last one, run the final callback.
            cb.onLastFile()
          }
        }
      });
    })
  },
  defineFunctions: function (cb) {
    var props = [
    'onLine',
    'onLastLine',
    'onLastFile'
    ];

    props.forEach(function (prop) {
      if (typeof cb[prop] !== 'function') {
        // Stop typechecking all functions
        cb[prop] = function () {
          return null;
        };
      }
    });

    return cb;
  }
};

module.exports = cn;
