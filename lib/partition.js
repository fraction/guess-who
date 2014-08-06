var partition = function (n, cb) {
  var parts = [];

  var isLast = function (arr) {
    return arr.every(function (el) {
      if (el === 1) {
        return true;
      } else {
        return false;
      }
    });
  };

  var getParts = function (remainder, max, res) {
      max = max || remainder;
      res = res || [];

      if (remainder === 0) {
        parts.push(res);
        if (isLast(res)) {
          parts.reverse();
          parts.forEach(cb);
        }
      } else {
          if (max <= remainder) {
              //console.log("Let's make a guess of " + max);
              var newRemainder = remainder - max;
              //console.log('Remaining: ' + newRemainder);
              //console.log('Res: ' + res);
              var newRes = res.slice(0);
              newRes.push(max);
              getParts(newRemainder, max, newRes);
          }
          if (max > 1) {
              //console.log('Bring down max guess from ' + max + ' to ' + (max - 1));
              getParts(remainder, max-1, res);
          }
      }
  };

  getParts(n);
};

module.exports = partition;
