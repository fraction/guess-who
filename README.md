# Guess Who

Extract names from usernames and email addresses with Node.js.

## Installation

To add this to your existing project, install this as an NPM module.

```sh
npm install guess-who
```

Otherwise, clone the repo, install dependencies, and run the example.

```sh
git clone https://github.com/fraction/guess-who.git && cd guess-who
npm install
node examples/name-from-email
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

Fork the project, commit your changes, and [open a pull request](https://github.com/fraction/guess-who/compare/).
