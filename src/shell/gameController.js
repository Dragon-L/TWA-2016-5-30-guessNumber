var isValid = require('../kernel/isValid');
var input = require('../model/input');
var generateNumber = require('../kernel/generateNumber');
var compareNumber = require('../kernel/compareNumber');

function gameController() {
    var maxTimes = 6;
    console.log('Please entry four digits without repetition:');

    var targetDigits = null;
    do{
        targetDigits = generateNumber.method();
    }while (!isValid(targetDigits));

    for (var remainingTimes = maxTimes; remainingTimes > 0;--remainingTimes){
        console.log(`You have ${remainingTimes} chance!`);
        var playerDigits = input.method();
        while (!isValid(playerDigits)){
            console.log('digits is invalid!');
            console.log('Please entry again:');
            playerDigits = input.method();
        }

        var compareResult = compareNumber(targetDigits,playerDigits);

        if(compareResult === '4A0B'){
            console.log('You Win!');
            return true;
        }else {
            console.log(compareResult + '\n');
        }
    }
    console.log('You lose!');
    return false;
}

module.exports = gameController;