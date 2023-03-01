// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    //TOO MUCH TIME I GUESS
    // let answer = 1.00000
    // if(n === 0 || x === 1) return 1
    // for(i=0; i<Math.abs(n); i++){
    //     if(n > 0) answer *= x
    //     else answer /= x
    // }
    // return answer

    //TOO MUCH TIME, BUT LIKE WHY WTF
    // if(n < 0 && x !== 0) return myPow(1/x, n*-1);
    // if(n === 0) return 1
    // if(n === 1) return x
    // if (n % 2 === 0) return myPow(x, n / 2) * myPow(x, n / 2)
    // else return myPow(x, n - 1) * x

    if(n < 0 && x !== 0){
        return myPow(1/x, n*-1);
    }
    if(n === 0){
       return 1
    }
    if(n === 1){
        return x
    }
    if (n % 2 === 0){
        const res = myPow(x, n / 2);
        return res * res
    }else{
        return myPow(x, n - 1) * x
    }
};