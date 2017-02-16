module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                
            },
            target: {
                files: [{                    
                    'css/site.min.css': ['css/bootstrap.css', 'css/bootstrap-theme.css', 'css/font-awesome.css','css/icofont.css']
                },
                {
                    'css/jquery.bxslider.min.css': ['css/jquery.bxslider.css']
                },
                {
                    'css/lightbox.min.css': ['css/lightbox.css']
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']);
}