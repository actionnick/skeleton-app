module.exports = function(grunt) {
  var sources = require("../styles/config/build_list.json");
  var path = require("path");
  var fs = require('fs');
  grunt.loadNpmTasks("grunt-sass");

  const BUILD_PATH = "public/stylesheets/";
  const STYLES_PATH = "styles";

  var config = { options: {} };
  
  if (grunt.option("production")) {
    config.options.outputStyle = "compressed";
  } else {
    config.options.sourceMap = true;
  }

  sources.forEach(function(relativeSourcePath) {
    var sourcePath = path.join(STYLES_PATH, relativeSourcePath);
    var filename = path.basename(sourcePath, ".scss");
    var targetFilename = `${filename}.css`;

    var parts = sourcePath.split("/");
    parts.pop();
    parts.shift();
    var targetPath = path.join(parts.join("/"), targetFilename);

    var filesHash = {};
    filesHash[path.join(BUILD_PATH, targetPath)] = sourcePath;

    config[sourcePath] = { files: filesHash };

    // Make sure source path exists
    fs.accessSync(sourcePath, fs.F_OK);
  });

  return config;
};
