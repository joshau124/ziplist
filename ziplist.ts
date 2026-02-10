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

function ziplist(list1:unknown[], list2:unknown[]) {
  const returnList:unknown[] = [];
  if (list1.length !== list2.length) {
    console.log('Lists are not the same length');
  } else {
    let index = 0;
    for (let i = 0; i < (list1.length * 2); i++) {
      if (i % 2 === 0) {
        returnList[i] = list1[index];
      } else {
        returnList[i] = list2[index];
        index++;
      }
    }
  }
  return returnList;
}

console.log(ziplist([1, 2, 3], ['a', 'b', 'c']));
