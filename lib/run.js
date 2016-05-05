var co = require('co');

function run(fn) {
  return co(fn);
}

module.exports = run;
