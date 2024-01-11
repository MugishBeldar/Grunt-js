module.exports = function(grunt) {
    // configuration 
    grunt.initConfig({
        // pass in options pulugins refrence and files etc.
        concat: {
            js: {
                src: ['js/test-1.js', 'js/test-2.js'],
                dest: 'concat/concat.js'
            },
            css: {
                src: ['css/style-1.css', 'css/style-2.css'],
                dest: 'concat/concat.css'
            }
        }
    })

    // load plugins
    // grunt.loadNpmTasks('')
    grunt.loadNpmTasks('grunt-contrib-concat');


    // register tasks
    grunt.registerTask('run', function() {
        console.log('grunt run task running');
    })

    grunt.registerTask('sleeping', function() {
        console.log('grunt sleep task')
    })

    grunt.registerTask('all', ['run', 'sleeping'])

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
}