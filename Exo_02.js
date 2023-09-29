function isPalindrome(str) {
    let words = "";
    for (let i = str.length - 1; i >= 0; i--) {
        words += str[i];
    }
    if (words == str) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello world"));