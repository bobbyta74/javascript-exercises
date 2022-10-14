const removeFromArray = function(...args) {
    //1st parameter is the whole list
    const array = args[0];
    let newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;


