var nconf = require('nconf');

nconf
  .argv()
  .env()

if (process.env.NODE_ENV === "production") nconf.file("./config/production.json");
if (process.env.NODE_ENV === "testing") nconf.file("./config/test.json");

nconf.file("./config/development.json");

module.exports = nconf.get();
