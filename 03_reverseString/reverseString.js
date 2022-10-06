const reverseString = function(strinput) {
    let reversed = "";
    let myarray = Array.from(strinput);
    for (let i = 1; i <= myarray.length; i++) {
        reversed += myarray[myarray.length - i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
