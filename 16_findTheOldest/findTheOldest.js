const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        if (!a.hasOwnProperty("yearOfDeath")) {
            return (new Date().getFullYear() - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        } 
        if (!b.hasOwnProperty("yearOfDeath")) {
            return (a.yearOfDeath - a.yearOfBirth) - (new Date().getFullYear() - b.yearOfBirth);
        }
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });

    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
