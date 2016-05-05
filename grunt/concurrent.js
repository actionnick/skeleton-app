module.exports = function(grunt) {
  var jsSources = require("../frontend/config/build_list.json");
  var path = require('path');
  grunt.loadNpmTasks('grunt-concurrent');

  var config = {
    javascript: {
      tasks: [],
      options: {
        logConcurrentOutput: true
      }
    }
  };

  jsSources.forEach(function(source) {
    config.javascript.tasks.push("browserify:" + source);
  });

  return config;
};
