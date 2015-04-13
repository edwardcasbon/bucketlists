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

        /* Watch scss and js and process when they're updated */
        watch: {
            sass: {
                files: ['html-templates/assets/css/**/*.scss', 'bower_components/isw/css/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }

    });

    // Load task plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Register the default task.
    grunt.registerTask('default', 'watch');
};
