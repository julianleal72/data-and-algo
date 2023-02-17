// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //BELOW RUNS OUT OF TIME
    // let profit = 0
    // for (let i = 0; i < prices.length - 1; i++){
    //     for (let j = i + 1; j < prices.length; j++){
    //         profit = Math.max(profit, prices[j] - prices[i])
    //     }
    // }
    // return profit
    let minimum = prices[0];
    let maximum = 0;
    for(let i=0;i<prices.length;i++){
        minimum = Math.min(minimum, prices[i]);
        maximum = Math.max(maximum, prices[i]-minimum);
    }
    return maximum;
};