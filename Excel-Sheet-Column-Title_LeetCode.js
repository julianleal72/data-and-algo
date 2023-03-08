// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


// Example:
// Input: columnNumber = 28
// Output: "AB"


/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    if (columnNumber <= 26) {
        console.log(letters[columnNumber - 1])
        return letters[columnNumber - 1]
    }
    let title = "";
    if (columnNumber <= 26) {
        return charMap[n%26]
    }
    while (columnNumber > 0) {
        let r = columnNumber%26;
        columnNumber = Math.floor(columnNumber/26);
        if (r == 0) {
            r = 26;
            columnNumber = columnNumber-1;
        }
        title = letters[r-1] + title;
    }
    
    return title;
};