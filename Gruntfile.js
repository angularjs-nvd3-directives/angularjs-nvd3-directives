/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',
            //' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            js: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        clean: ["dist/"],
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {"angular": false, "nv": false, "d3": false, "configureYaxis": false, "configureXaxis": false}
            },
            afterconcat: ['dist/angularjs-nvd3-directives.js'],
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['build/components/angular/angular.js'], dest: 'examples/js/angular.js', filter: 'isFile'},
                    {src: ['build/components/d3/d3.js'], dest: 'examples/js/d3.js', filter: 'isFile'},
                    {src: ['build/components/nvd3/nv.d3.js'], dest: 'examples/js/nv.d3.js', filter: 'isFile'},
                    {src: ['build/components/nvd3/src/nv.d3.css'], dest: 'examples/stylesheets/nv.d3.css', filter: 'isFile'},
                    {src: ['build/components/moment/moment.js'], dest: 'examples/js/moment.js', filter: 'isFile'}


                ]
            }
        },
        bower: {
            install: {
                options:{
                    targetDir: './build/components',
                    layout: 'byComponent',
                    cleanTargetDir: true,
                    cleanBowerDir: false,
                    verbose: true
                }
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('bower', ['bower:install']);

    // Default task.
    grunt.registerTask('default', ['clean', 'concat', 'jshint']);

};
