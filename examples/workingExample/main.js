//to build: node ./../node_modules/jacob/cmd/cmd.js -t lexer.jacoblex -l lexer.js -g parser.jacobgram -p parser.js
var Lexer = require("./lexer");
var Parser = require('./parser');


var lexer = new Lexer();
lexer.setInput("a = 2+3*4\r\na = a / 2\r\nprint a");


/*

while( !lexer.isEOF(lexer.nextToken())){

        if( lexer.current.name === "PLUS"){

                console.log("dans main", lexer);

        }

}

*/



var parser = new Parser();
parser.parse(lexer);
