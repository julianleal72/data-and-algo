// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let test = num
    let str = ""
    while(test>=1000){
        str+="M"
        test-=1000
    }
    if(test>=900){
        str+="CM"
        test-=900
    }
    while(test>=500){
        str+="D"
        test-=500
    }
    if(test>=400){
        str+="CD"
        test-=400
    }
    while(test>=100){
        str+="C"
        test-=100
    }
    if(test>=90){
        str+="XC"
        test-=90
    }
    while(test>=50){
        str+="L"
        test-=50
    }
    if(test>=40){
        str+="XL"
        test-=40
    }
    while(test>=10){
        str+="X"
        test-=10
    }
    if(test===9){
        str+="IX"
        test-=9
    }
    while(test>=5){
        str+="V"
        test-=5
    }
    if(test===4){
        str+="IV"
        test-=4
    }
    while(test>=1){
        str+="I"
        test-=1
    }
    console.log(test)
    return str
};