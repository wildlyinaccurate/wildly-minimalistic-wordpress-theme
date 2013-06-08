'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true,
            },
            coffee: {
                files: ['assets/coffee/{,*/}*.coffee'],
                tasks: ['coffee']
            },
            compass: {
                files: ['assets/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            js: {
                files: [
                    'assets/js/{,*/}*.js',
                    '!assets/js/scripts.js'
                ],
                tasks: ['jshint', 'requirejs']
            },
            livereload: {
                files: [
                    '*.html',
                    '*.php',
                    '*.js',
                    '*.css',
                    'assets/scss/{,*/}.scss',
                    'assets/images/{,*/}.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/coffee',
                    src: ['**/*.coffee'],
                    dest: 'assets/js',
                    ext: '.js'
                }]
            }
        },

        requirejs: {
            compile: {
                options: {
                    name: "main",
                    baseUrl: "assets/js",
                    mainConfigFile: "assets/js/main.js",
                    out: "assets/js/scripts.js"
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'assets/js/{,*/}*.js',
                '!assets/js/{,*/}*.min.js',
                '!assets/js/scripts.js'
            ]
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'assets/images/',
                        src: '**/*',
                        dest: 'assets/images/'
                    }
                ]
            }
        },

        deploy: {
            staging: {
                src: "./",
                dest: "~/path/to/theme",
                host: "user@host.com",
                recursive: true,
                syncDest: true,
                exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb', '.jshintrc']
            },
            production: {
                src: "./",
                dest: "~/path/to/theme",
                host: "user@host.com",
                recursive: true,
                syncDest: true,
                exclude: '<%= rsync.staging.exclude %>'
            }
        }
    });

    grunt.renameTask('rsync', 'deploy');

    grunt.registerTask('default', ['watch']);
};
