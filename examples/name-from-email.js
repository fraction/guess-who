var gw = require('../');

var list = [
  'bentonfairchild@cmail.com',
  'dula@cmail.com',
  'volk@cmail.com',
  'rob.volk@cmail.com',
  'kristi.dula@cmail.com',
  'kristi.betty.dula@cmail.com',
  'kristi.b.dula@cmail.com',
  'robertvolk@cmail.com',
  'robvolk@cmail.com',
  'k.b.dula@cmail.com',
  'kristidula@cmail.com',
  'kristibettydula@cmail.com',
  'kristibdula@cmail.com',
  'kdula@cmail.com',
  'kbdula@cmail.com'
];

var usernames = [];

list.forEach(function (email) {
  usernames.push(email.split('@')[0]);
});

gw(usernames, function (username, name) {
  console.log('"' + username + '" is actually "' + name.join(' ') + '"');
});
