/**
 * Created by gcannata on 30/08/2014.
 */
module.exports = function(grunt) {

    // Add the grunt-mocha-test tasks.
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.initConfig({
        // Configure a mochaTest task
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.registerTask('default', ['jacoblex','jacobgram']);

    grunt.registerTask('jacoblex', 'Build JacobLex.js', function() {
           var jacob = require('./index');
        jacob.elaborateLexFile('./lib/parser/lexlex.js','./lib/parser/gruntGenerated/JacobLexerLexer.js');
        jacob.elaborateGramFile('./lib/parser/lexgram.js','./lib/parser/gruntGenerated/JacobLexInterpreter.js');
    });

    grunt.registerTask('jacobgram', 'Build JacobLex.js', function() {
        var jacob = require('./index');
        jacob.elaborateLexFile('./lib/parser/gramlex.jacoblex','./lib/parser/gruntGenerated/JacobGramLexer.js');
        jacob.elaborateGramFile('./lib/parser/gramgram.js','./lib/parser/gruntGenerated/JacobGramInterpreter.js');
    });



    grunt.registerTask('test', 'Run tests', function() {
        var jacob = require('./index');
        jacob.elaborateLexFile('./lib/parser/gramlex.jacoblex','./lib/parser/gruntGenerated/JacobGramLexer.js');
        jacob.elaborateGramFile('./lib/parser/gramgram.js','./lib/parser/gruntGenerated/JacobGramInterpreter.js');
    });

    grunt.registerTask('test', 'mochaTest');
};
