// Generated on 2013-06-13 using generator-webapp 0.2.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var buildConfig = {
        app: 'src',
        dist: 'dist'
    };

    grunt.initConfig({
        config: buildConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            coffee: {
                files: ['<%= config.app %>/assets/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            compass: {
                files: ['<%= config.app %>/assets/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            copy: {
                files: [
                    '.tmp/*.css',
                    '.tmp/assets/scripts/{,*/}*.js',
                    '<%= config.app %>/assets/styles/{,*/}*.{scss,sass}',
                    '<%= config.app %>/**/*.php'
                ],
                tasks: ['copy:dist']
            },
            livereload: {
                files: [
                    '<%= config.dist %>/*.css',
                    '<%= config.dist %>/scripts/*.js',
                    '<%= config.dist %>/**/*.php'
                ]
            }
        },
        fixSources: {
            files: ['<%= config.dist %>/footer.php'],
            fixedPath: "<?php bloginfo('template_directory'); ?>"
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/assets/scripts/**/*.js',
                '!<%= config.app %>/assets/scripts/vendor/*'
            ]
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/assets/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/assets/scripts',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= config.app %>/assets/styles',
                cssDir: '.tmp/',
                generatedImagesDir: '.tmp/assets/images/generated',
                imagesDir: '<%= config.app %>/assets/images',
                javascriptsDir: '<%= config.app %>/assets/scripts',
                fontsDir: '<%= config.app %>/assets/styles/fonts',
                importPath: '<%= config.app %>/bower_components',
                httpImagesPath: '/assets/images',
                httpGeneratedImagesPath: '/assets/images/generated',
                httpFontsPath: '/assets/styles/fonts',
                relativeAssets: false
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/{,*/}*.php'
        },
        usemin: {
            options: {
                dirs: ['<%= config.dist %>']
            },
            html: ['<%= config.dist %>/{,*/}*.php'],
            css: ['<%= config.dist %>/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/assets/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/style.css': '.tmp/style.css',
                    '<%= config.dist %>/editor-style.css': '.tmp/editor-style.css'
                }
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '**/*.php',
                        '*.{ico,png,txt}'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'coffee:dist',
                'compass:server'
            ],
            dist: [
                'coffee',
                'compass:dist',
                'imagemin'
            ]
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'usemin',
        'fixSources'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'build'
    ]);

    // This is a kludge to fix the script src generated by usemin
    grunt.registerTask('fixSources', function() {
        var config = grunt.config(this.name);

        config.files.forEach(function(path) {
            var content = grunt.file.read(path);

            content = content.replace(/src="([^"]+?)"/g, 'src="' + config.fixedPath + '/$1"');

            grunt.file.write(path, content);
        });
    });
};
