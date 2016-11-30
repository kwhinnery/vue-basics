module.exports = function(grunt) {
  grunt.initConfig({
    // Make package info available to tasks
    pkg: grunt.file.readJSON('package.json'),

    // Browserify front-end modules
    browserify: {
      options: { 
        browserifyOptions: {
          debug: true
        }
      },
      js: {
        src: ['src/browser/js/app.js'],
        dest: 'public/app.js'
      }
    },

    // Watch for changes in front-end files
    watch: {
      javascript: {
        files: ['src/browser/js/**/*.js', 'src/browser/js/**/*.vue'],
        tasks: ['browserify']
      }
    },

    // restart server node process during development
    nodemon: {
      dev: {
        script: 'bin/server.js',
        options: {
          ignore: ['node_modules/**', 'public', 'src/browser']
        }
      }
    },

    // Run dev watch tasks (and others potentially) concurrently 
    concurrent: {
      dev: {
        tasks: ['watch', 'nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  // Load third party tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default is running the local development server
  grunt.registerTask('default', ['browserify', 'concurrent:dev']);
};
