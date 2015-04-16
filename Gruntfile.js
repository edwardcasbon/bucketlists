module.exports = function(grunt) {

    grunt.initConfig({

        /* Sass configuration */
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'auto',
                    require: 'sass-globbing'
                },
                files: [{
                    expand: true,
                    cwd: 'html-templates/assets/css',
                    src: ['*.scss', '*/*.scss'],
                    dest: 'html-templates/assets/css',
                    ext: '.css'
                }]
            }
        },

        /* Automatically add vendor-prefixes to CSS using the "Can I Use" database. */
        // Use '$ npm update caniuse-db' to update the prefixes database.
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie >= 8'],
                map: true
            },
            css: {
                src: ['html-templates/assets/css/bucketlists.css']
            }
        },

        /* JSHint - Check JS syntax */
        jshint: {
            options: {},
            scripts: ['assets/js/**/*.js', '!assets/js/**/*.min.js', '!assets/js/vendor/**/*'],
        },

        /* Uglify - Concatenate and minify JavaScript */
        uglify: {
            options: {
                sourceMap: true,
                mangle: true
            },
            scripts: {
                files: {
                    'assets/js/app.min.js' : [
                        'assets/js/app.js',
                        'assets/js/models/**/*.js',
                        'assets/js/collections/**/*.js',
                        'assets/js/controllers/**/*.js',
                        'assets/js/router.js'
                    ]
                }
            }
        },

        /* Watch scss and js and process when they're updated */
        watch: {
            sass: {
                files: ['html-templates/assets/css/**/*.scss', 'bower_components/isw/css/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            js: {
                files: ['assets/js/*.js', 'assets/js/**/*.js', '!assets/js/**/*.min.js'],
                tasks: ['jshint', 'uglify']
            }
        }

    });

    // Load task plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register the default task.
    grunt.registerTask('default', 'watch');
};
