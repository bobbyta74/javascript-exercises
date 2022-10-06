const repeatString = function(strinput, times) {
    let strout = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        strout += strinput;
    }
    return strout;
};

// Do not edit below this line
module.exports = repeatString;
