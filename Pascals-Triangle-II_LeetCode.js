// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

//Example
// Input: rowIndex = 3
// Output: [1,3,3,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let container = []
    if(rowIndex >= 0) container.push([1])
    if(rowIndex >= 1) container.push([1,1])
    if(rowIndex >= 2){
    for (let i = 2; i <= rowIndex; i++){
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
    return container[rowIndex]
};