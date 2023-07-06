const sumAll = function(num1, num2) {
    if(
        (typeof(num1) != "number" || typeof(num2) != "number") ||
        (num1 < 0 || num2 < 0)) return 'ERROR'
       
    let start = num1;
    let end = num2;

    if(end < start){
        let temp = start;
        start = end;
        end = temp;
    }

    let total = 0;
    for(let i = start; i <= end; i++){  
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
