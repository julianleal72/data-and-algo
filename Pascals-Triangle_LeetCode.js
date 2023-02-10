// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let container = []
if(numRows > 0) container.push([1])
if(numRows > 1) container.push([1,1])
if(numRows > 2){
for (let i = 2; i < numRows; i++){
    let temp = [1]
    let z = 1;
    while (z < container[i-1].length){
        temp[z] = container[i-1][z-1] + container[i-1][z]
        z++
    }
    temp.push(1)
    container.push(temp)
    }
}
console.log(container)
return container
};