module.exports = function(grunt) {
  var htmlFiles = [
    'index.html'
  ];

  var jsxClientFiles = [
    'js/react-sample.jsx'
  ];

  var allFiles = htmlFiles.concat(jsxClientFiles);

  grunt.initConfig({
    browserify: {
      build: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          'dist/react-sample.js': jsxClientFiles
        }
      }
    },
    clean: [
      'node_modules',
      'bower_components',
      'dist'
    ]
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['browserify:build']);
};
