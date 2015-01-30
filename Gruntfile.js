/*global module:false*/
module.exports = function (grunt) {
	'use strict';
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= pkg.license %> */\n',
		// Task configuration.
		clean: ['dist/', 'generated/'],
        karma: {
            unit: {
                configFile: 'test/karma.config.js'
            }
        },
		ngmin: {
			directives: {
				expand: true,
				cwd: 'src',
				src: ['directives/nvd3Directives.js', 'directives/legendDirectives.js'],
				dest: 'generated'
			}
		},
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			js: {
				src: [
					'src/**/intro.js',
					'generated/directives/legendDirectives.js',
					'src/**/nvD3LegendConfiguration.js',
					'src/**/nvD3Events.js',
					'src/**/nvD3AxisConfiguration.js',
					'generated/directives/nvd3Directives.js',
					'src/**/outro.js'
				],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		jshint: {
			options: {
				jshintrc: true
			},
			afterconcat: ['dist/angularjs-nvd3-directives.js'],
			gruntfile: {
				src: 'Gruntfile.js'
			}
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
		'bower-install-simple': {
			options: {
                color: true,
				directory: './build/components',
			},
            'prod': {
                options: {
                    production: true
                }
            },
            'dev': {
                options: {
                    production: false
                }
            }
		},
		release:{
			options: {
				bump: false,
				file: 'bower.json',
				tag: true,
				commit: false,
				tagName: 'v<%= version %>',
				npm: false,
				npmtag: true,
				github: {
					repo: 'angularjs-nvd3-directives/angularjs-nvd3-directives', //put your user/repo here
					usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
					passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
				}
			}
		},
		changelog: {
			release: {
				options: {
					version: '<%= pkg.version %>'
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-bower-install-simple');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-ngmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-templated-changelog');

    // Alias to make bower-install a little simpler, pun intended
    grunt.registerTask('bower-install', ['bower-install-simple']);

    // Simple alias to run unit tests from scratch
	grunt.registerTask('test', ['clean', 'karma']);

	// Default task.
	grunt.registerTask('default', ['clean', 'karma', 'ngmin', 'concat', 'jsbeautifier', 'jshint', 'uglify']);
};
