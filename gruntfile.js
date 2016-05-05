module.exports = function (grunt) {
  var env = grunt.option("production") ? "production" : process.env.NODE_ENV || "development";
  grunt.option("production", env === "production");
  grunt.option("development", env === "development");

  grunt.log.writeln("Running for env: " + env);

  require('grunt-config-dir')(grunt);

  grunt.registerTask('default', ['browserify', 'sass']);
  grunt.registerTask('watch_js', function() {
    grunt.option("watch", true);
    grunt.task.run("concurrent:javascript");
  });
}
