/*global module:false*/

module.exports = function (grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.license %> */\n',

    // Project settings
    yeoman: appConfig,

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    jsbeautifier : {
      files : ['dist/angularjs-nvd3-directives.js'],
      options : {
        js: {
          evalCode: true,
          indentSize: 2,
          indentChar: ' ',
          spaceInParen: true,
          jslintHappy: true,
          indentLevel: 0
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      min: {
        files: {
          'dist/angularjs-nvd3-directives.min.js': ['dist/angularjs-nvd3-directives.js']
        }
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: [
          'src/*.js',
          'src/**/*.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: '*.js',
          dest: 'dist/'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      main: {
        files: [
          {src: ['build/components/angular/angular.js'], dest: 'examples/js/angular.js', filter: 'isFile'},
          {src: ['build/components/angular-route/angular-route.js'], dest: 'examples/js/angular-route.js', filter: 'isFile'},
          {src: ['build/components/d3/d3.js'], dest: 'examples/js/d3.js', filter: 'isFile'},
          {src: ['build/components/nvd3/nv.d3.js'], dest: 'examples/js/nv.d3.js', filter: 'isFile'},
          {src: ['build/components/nvd3/nv.d3.css'], dest: 'examples/stylesheets/nv.d3.css', filter: 'isFile'},
          {src: ['build/components/moment/moment.js'], dest: 'examples/js/moment.js', filter: 'isFile'}
        ]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    coveralls: {
      options: {
        debug: true,
        coverage_dir: 'coverage/',
        dryRun: false,
        force: true,
        recursive: true
      }
    },

    bower: {
      install: {
        options: {
          targetDir: './build/components',
          layout: 'byComponent',
          cleanTargetDir: true,
          cleanBowerDir: false,
          verbose: true
        }
      }
    },

    release: {
      options: {
        bump: false,
        file: 'bower.json',
        tag: true,
        commit: false,
        tagName: 'v<%= version %>',
        npm: false,
        npmtag: true,
        github: {
          repo: 'cmaurer/angularjs-nvd3-directives', //put your user/repo here
          usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
          passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
        }
      }
    },
    changelog: {
      release: {
        options: {
          version: 'v0.0.7'
        }
      }
    }
  });


  grunt.registerTask('test', [
    'clean:server',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'concat',
    'ngmin',
    'copy:main',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
