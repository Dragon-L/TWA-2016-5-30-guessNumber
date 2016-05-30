function compareNumber(oneNumber, anotherNumber){
    var numOfA = 0;
    var numOfB = 0;
    for(var i = 0,lenOfOne = oneNumber.length;i < lenOfOne; i++){
        for(var j = 0,lenOfAnother = anotherNumber.length;j < lenOfAnother;j++){
            if(oneNumber[i] === anotherNumber[j] && i === j){
                numOfA++;
            }
            else if (oneNumber[i] === anotherNumber[j] && i!=j){
                numOfB++;
            }
        }
    }
    return `${numOfA}A${numOfB}B`;
}

module.exports = compareNumber;