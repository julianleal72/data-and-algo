// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // let count = 2
    // if(n<=2) return 0
    // if(n<=3) return 1
    // if(n<=5) return 2
    // for(let i=5; i<n; i+=2){
    //     let check = true
    //     for(j=2; j<=i/2; j++){
    //         if(i%j===0) {
    //             check = false
    //             break
    //         }
    //     }
    //     if(i>=n) break
    //     if (check) count++
    // }
    // return count

    let sieveOfE = new Array(n).fill(true)
    let primeCount = 0
    for(let i = 2; i < Math.sqrt(n); i++){
        if(sieveOfE[i]){
            for(let j = Math.pow(i,2); j<n;j+=i){
                sieveOfE[j] = false
            }
        }
    }
    sieveOfE.forEach((val, ind) => {
        if(val && ind > 1) primeCount++
    })
    return primeCount
};