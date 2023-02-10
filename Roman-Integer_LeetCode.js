//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//Example:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let total = 0
    for (let i=0; i<s.length; ) {
        switch(s[i]) {
            case "M": total+=1000 
            break
            case "D": total+=500 
            break
            case "C": 
                if((i != s.length-1) && (s[i+1] === "M" || s[i+1] === "D")) {
                    switch(s[i+1]){
                        case "M": total += 900
                        break
                        case "D": total += 400
                        break}
                    i++}
                else total+=100 
                
            break
            case "L": total+=50 
            break
            case "X": if((i != s.length-1) && (s[i+1] === "C" || s[i+1]==="L")) {
                    switch(s[i+1]){
                        case "C": total += 90
                        break
                        case "L": total += 40
                        break}
                    i++}
                    else total+=10
                    
            break
            case "V": total+=5 
            break
            case "I": 
                if((i != s.length-1) && (s[i+1] != "I")) {
                    switch(s[i+1]){
                        case "X": total += 9
                        break
                        case "V": total += 4
                        break
                    }
                    i++;
                }
                else total+=1
            break}
        console.log(total)
        i++;
    }
    return total
};