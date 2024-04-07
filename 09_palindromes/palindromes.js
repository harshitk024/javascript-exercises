const palindromes = function (string) {
    let reverse = string.toLowerCase().split("")

    let alphanumerics = "abcdefghijklmnopqrstuvwxyz1234567890"

    let cleanedString = reverse.filter((letter)=>alphanumerics.includes(letter)).join("")

    let reversed_string = cleanedString.split("").reverse().join("")


    return cleanedString == reversed_string
};

// Do not edit below this line
module.exports = palindromes;
