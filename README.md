# Guess Who

Extract names from usernames and email addresses with Node.js.

## Installation

Once you have [Node](http://nodejs.org/download/) installed, just add this to your project directory.

```
npm install guess-who
```

## Usage

After you've installed `guess-who`, require it and use it!

```js
gw = require('guess-who');

gw('johndoe', function (username, name) {
  console.log('"' + username + '" is actually "' + name.join(' ') + '"');
  // "johndoe" is actually "john doe"
});
```

Take a look at the examples directory to see what else can be done.

## Support

Please [open an issue](https://github.com/fraction/guess-who/issues/new) for questions and concerns.

## Contributing

To

Fork the project, commit your changes, and [open a pull request](https://github.com/fraction/guess-who/compare/).
