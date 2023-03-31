const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, theName) {
    let matching = [];
    arr.filter(
        function (names) {
            if (names === theName) {
                matching.push(names)
            };
        }
    )
    return matching;

}
console.log(findMatching(drivers, "bobby"))