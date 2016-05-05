var Mongoose = require('mongoose');
var config = require('../config/');
var logger = require('../lib/logger');

Mongoose.connect(config.MONGODB_URI);
var connection = Mongoose.connection;

var promise = new Promise(function(resolve, reject) {
  connection.on('error', function(err) {
    logger.error('Could not connect to db!', err);
    reject(connection);
  });
  connection.once('open', function () {
    logger.info('Connected to db');
    resolve(connection);
  });
});

exports.promise = promise;
exports.connection = connection;
