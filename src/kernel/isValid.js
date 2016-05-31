function isValid(digits) {
    if (digits == null){
        return false;
    }
    var isFourBits = checkBit(digits);
    var isNonRepetition = checkRepetition(digits);
    var isNumbers = checkNumber(digits);
    return (isFourBits && isNonRepetition) && isNumbers;
}

function checkBit(digits){
    return (digits.length == 4);
}

function checkRepetition(digits){
    var hash = {};
    for(var i = 0, len = digits.length;i < len; i++){
        if(hash[digits[i]]){
            return false;
        }
        hash[digits[i]] = 'anything';
    }
    return true;
}

function checkNumber(digits) {
    var result = true;
    for (var i = 0,len = digits.length;i < len;i++){
        if(isNaN(parseInt(digits[i]))){
            result = false;
        }
    }
    return result;
}



module.exports = isValid;