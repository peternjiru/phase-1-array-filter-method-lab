function findMatching(arr, theName) {
    let matching = [];
    arr.filter(
        function (names) {
            if (names.toLowerCase() === theName.toLowerCase()) {
                matching.push(names)
            };
        }
    )
    return matching;

}

function fuzzyMatch(arr, nameStart) {
    let matchingStart = [];
    arr.filter(
        function (names) {
            if (names.startsWith(nameStart)) {
                matchingStart.push(names)
            };
        }
    )
    return matchingStart;

}

function matchName(arr, theName) {
    let matchNameObject = [];
    arr.filter(
        function (names) {
            if (names.name === theName) {
                matchNameObject.push(names)
            };
        }
    )
    return matchNameObject;

}
