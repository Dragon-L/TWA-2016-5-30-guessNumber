function generateNumber() {
    var targetDigit = '';
    var numOfDigits = 4;
    for(var i = 0; i < numOfDigits; i++){
        var digit = Math.floor(Math.random() * 10);
        targetDigit += digit.toString();
    }
    return targetDigit;
}
//
// module.exports = {
//     generateNumberMethod:generateNumber
// };
module.exports = {
    method : generateNumber
};