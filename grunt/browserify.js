module.exports = function(grunt) {
  var sources = require("../frontend/config/build_list.json");
  var path = require("path");
  var fs = require('fs');
  grunt.loadNpmTasks("grunt-browserify");

  const BUILD_PATH = "public/javascripts/";
  const FRONTEND_PATH = "frontend";

  var config = {};
  var transforms = ["envify", ["babelify", { presets: ["react", "es2015"] }]];

  if (grunt.option("production")) {
    transforms.push(["uglifyify", {global: true}]);
  }

  sources.forEach(function(relativeSourcePath) {
    var sourcePath = path.join(FRONTEND_PATH, relativeSourcePath)

    var filesHash = {};
    filesHash[path.join(BUILD_PATH, relativeSourcePath)] = [sourcePath];

    // Make sure source path exists
    fs.accessSync(sourcePath, fs.F_OK);

    config[relativeSourcePath] = {
      files: filesHash,
      options: {
        transform: transforms,
        watch: grunt.option('watch'),
        keepAlive: grunt.option('watch')
      }
    }
  });
 
  return config;
};
