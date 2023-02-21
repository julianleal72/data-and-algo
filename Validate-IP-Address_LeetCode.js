// Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.
// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00", and "192.168@1.1" are invalid IPv4 addresses.
// A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
// 1 <= xi.length <= 4
// xi is a hexadecimal string which may contain digits, lowercase English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
// Leading zeros are allowed in xi.
// For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

// Example:
// Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
// Output: "IPv6"
// Explanation: This is a valid IPv6 address, return "IPv6".


/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    console.log(queryIP)  
    if(checkIP4(queryIP)) return "IPv4"
    if(checkIP6(queryIP)) return "IPv6"
    return "Neither"
};

function checkIP4(q){
    let arr = q.split(".")
    console.log(arr)
    if(arr.length !== 4) return false
    for(let elem of arr){
        if(elem[0] === '0' && elem.length > 1) return false
        if (parseInt(elem) > 255) return false
        if (elem.match(/^[0-9]+$/) === null) return false
    }
    return true
}

function checkIP6(q){
    let arr = q.split(":")
    console.log(arr)
    if(arr.length !== 8) return false
    for(let elem of arr){
        if (elem.length > 4) return false
        else if (elem.match(/^[a-fA-F0-9]+$/) === null) return false
    }
    return true
}

 