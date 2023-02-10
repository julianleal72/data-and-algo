// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.

// Example:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let commonalities = []
    let count = 0
    for (let x of list1){
        if(list2.find( y => y === x)){
            commonalities.push({string: x, sum: (list2.findIndex(elem => elem ===x) + count)})
        }
        count++
    }
    let min = commonalities[0].sum
    let output = []
    for (let x of commonalities){
        if(x.sum <= min) {
            if(x.sum < min) output = []
            output.push(x.string)
        }
    }
    return output
};