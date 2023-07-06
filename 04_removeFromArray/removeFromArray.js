const removeFromArray = function(nums, ...num) {
    
    return nums.filter(n => !num.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
