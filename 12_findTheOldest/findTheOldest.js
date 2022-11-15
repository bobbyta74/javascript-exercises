const findTheOldest = function(people) {
    //Adds max value (current year) to subtract from if the person is alive
    let addedmax = people.map(function (person) {
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = new Date().getFullYear();
        }
    })
    let old2young = people.sort(function (a,b) {
        //Returns -1 (false) if b was younger
        //Returns 1 (true) if b was older
        let age1 = a.yearOfDeath - a.yearOfBirth;
        let age2 = b.yearOfDeath - b.yearOfBirth;
        return age2 - age1;
    });
    return old2young[0];
};

// Do not edit below this line
module.exports = findTheOldest;
