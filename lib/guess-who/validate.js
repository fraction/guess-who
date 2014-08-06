// Make sure that input follows a reasonable format (str or arr).
var validate = function (input, cb) {
  // A list of validated usernames to work with.
  var usernames = [];
  var errors = [];

  if (typeof input === 'undefined') {
    errors.push('Input must be either a string or an array.');
  }

  if (input.length === 0) {
    errors.push('Input strings and arrays must not have a length of 0.');
  }

  if (typeof input === 'string') {
    usernames.push(input);
  } else {
    // It's an array – validate each of the elements.
    input.forEach(function (el) {
        usernames.push(el);
    });
  }

  // Set `errors` to null if it's empty.
  errors = errors.length && errors || null;
  cb(errors, usernames);
};

module.exports = validate;
