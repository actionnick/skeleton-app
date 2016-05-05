module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");

  return {
    sass: {
      files: 'styles/**/*.scss',
      tasks: ['sass']
    }
  };
};
