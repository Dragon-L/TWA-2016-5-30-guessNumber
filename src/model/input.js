const readLine = require('readline-sync');

var input = function() {
    var inputLine = readLine.question();
    return inputLine;
};

module.exports = {
    method : input
};