const reverseString = function(s) {
    const arrayOfString = s.split('');
    let reversedArray = []
    for(let i = arrayOfString.length - 1; i >= 0; i-- ){
        reversedArray.push(arrayOfString[i]);
    }
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
