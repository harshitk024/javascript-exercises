const reverseString = function(string) {

    let splitString = string.split("")
    let reversed = ""
    for(let i = splitString.length-1;i>=0;i--){

        reversed= reversed + splitString[i]

    }

    return reversed

    
};

// Do not edit below this line
module.exports = reverseString;
