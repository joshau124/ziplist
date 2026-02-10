/*
Write a function called zipList that accepts two lists of equal length
and returns the result of alternatingly taking elements.
For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3],
the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should use a loop.
Now write a function called zipListTheFunctionalWay that does the same thing using Array functions.
Add console.log statements for each function to show the result.
For example, console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); should output ['a', 1, 'b', 2, 'c', 3].
Check the output in the browser console.
*/
function ziplist(list1, list2) {
    var returnList = [];
    if (list1.length !== list2.length) {
        console.log('Lists are not the same length');
    }
    else {
        var index = 0;
        for (var i = 0; i < (list1.length * 2); i++) {
            if (i % 2 === 0) {
                returnList[i] = list1[index];
            }
            else {
                returnList[i] = list2[index];
                index++;
            }
        }
    }
    return returnList;
}
function zipListTheFunctionalWay(list1, list2) {
    var returnList = [];
    if (list1.length !== list2.length) {
        console.log('Lists are not the same length');
    }
    else {
        list1.forEach(function (list, i) {
            returnList[((1 + i * 2))] = list;
        });
        list2.forEach(function (list, i) {
            returnList[((1 + i) * 2)] = list;
        });
    }
    returnList.shift();
    return returnList;
}
console.log(ziplist([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']));
