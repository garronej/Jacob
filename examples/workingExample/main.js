//to build: node ../../cmd/cmd.js -t lexer.jacoblex -l ./generated/lexer.js -g parser.jacobgram -p ./generated/parser.js
var Lexer = require("./generated/lexer");
var Parser = require("./generated/parser");


var lexer = new Lexer();
lexer.setInput("a = 2+3*4\r\na = a / 2\r\nprint a");


var parser = new Parser();
parser.parse(lexer);
