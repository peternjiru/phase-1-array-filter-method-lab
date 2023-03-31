const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, theName) {
    let matching = [];
    newArray = arr.map(word => word.toLowerCase());
    newArray.filter(
        function (names) {
            //newArray = arr.map(word => word.toLowerCase());
            newName = theName.toLowerCase();
            if (names === newName) {
                matching.push(theName)
            };
        }
    )
    return matching;

}
console.log(findMatching(drivers, "bobby"))