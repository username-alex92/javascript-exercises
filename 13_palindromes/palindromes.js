const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    let count = 0;
    for (let i = newStr.length - 1; i >= 0; i--) {
        if (newStr[count] !== newStr[i]) return false;
        count++;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
