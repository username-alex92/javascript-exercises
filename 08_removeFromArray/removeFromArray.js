const removeFromArray = function(arr, ...otherArgs) {
    const returnArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (otherArgs.includes(arr[i])) {
            continue;
        } 

        returnArr.push(arr[i]);
    }

    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
