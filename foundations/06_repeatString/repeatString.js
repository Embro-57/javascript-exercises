
const repeatString = function(singleString, n) {
    if (n < 0) {
        return "ERROR";
    }
    else {
        let finalString = ""
        for (let i = 0; i < n; i++) {
            finalString = finalString + singleString;
        };
        return finalString;
    }

};

// Do not edit below this line
module.exports = repeatString;
