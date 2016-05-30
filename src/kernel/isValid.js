function isValid(digits) {
    if (digits == null){
        return false;
    }
    var isFourNumber = checkDigitsNumber(digits);
    var isNonRepetition = checkRepetition(digits);
    return isFourNumber && isNonRepetition;
}

function checkDigitsNumber(digits){
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

module.exports = isValid;