/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function(arr1, arr2) {
//     // arr2 is the main order of elements
//     // arr1 has similar elements than arr2 and these arr1 elements need to be ordered according to arr2
//     // arr1 has to be at least as long as arr2
//     // This problem uses index, loop
    
//     let result = []
//     for (let i = 0; i < arr1.length; i++) { 
//         // If the arr1 elementn equals elmenet[i], then move the element to that position
//         if (arr2.includes(arr1[i])) result.push(arr1[i])
//         else result.push(arr1[i])

//         result.sort((a, b) => {
//         if (arr2[i]) {
//             return b === a
//         }
//     })
//     }
// return result
// };


let relativeSortArray = function(arr1, arr2) {
let result = []
let arrIndex = []

// Create occurences at all possible elements at an index
for (let i = 0; i < 1001; i++) arrIndex.push(0)

// Count how many times arr1 elements appear
for (let i = 0; i < arr1.length; i++) arrIndex[arr1[i]]++;

// Determine if occurences are included in arr2
// push the occurences from the arrIndex to the result array
for (let i = 0; i < arr2.length; i++) {
    while (arrIndex[arr2[i]] > 0) {
        result.push(arr2[i])
        arrIndex[arr2[i]]--
        }
    }

// Add integers not in the arr2
for (let i = 0; i < 1001; i++) {
    while (arrIndex[i] > 0) {
        result.push(i);
        arrIndex[i]--
    }
}
return result
}
console.log(relativeSortArray([2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31], [2,42,38,0,43,21]))