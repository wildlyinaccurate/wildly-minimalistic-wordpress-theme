'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true,
            },
            coffee: {
                files: ['src/coffee/{,*/}*.coffee'],
                tasks: ['coffee']
            },
            compass: {
                files: ['src/scss/{,*/}*.{scss,sass}'],
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
                    'src/scss/{,*/}.scss',
                    'assets/images/{,*/}.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/coffee',
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
                    out: "assets/js/scripts.js",
                    include: "requireLib"
                }
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: './',
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
        }
    });

    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', [
        'coffee',
        'compass',
        'requirejs'
    ]);
};
