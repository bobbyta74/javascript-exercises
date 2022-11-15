const palindromes = function (text) {
    let opposite = "";
    let cleanstring = "";
    //Removes punctuation
    cleanstring = text.replace(/[^\w\']|_/g, "");
    cleanstring = cleanstring.toLowerCase();
    for (let i = (cleanstring.length - 1); i >= 0; i--) {
        opposite += cleanstring[i];
    }
    return (opposite == cleanstring);
};

// Do not edit below this line
module.exports = palindromes;
