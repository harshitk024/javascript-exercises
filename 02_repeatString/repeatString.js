const repeatString = function(string,times) {

   if(times < 0){

    return "ERROR"

   }
   else if (times == 0){
    return ""
   }
   
   let repeatedString = string;
   for(let i = 1;i<times;i++){
    repeatedString = repeatedString + string
   }

   return repeatedString



};

// Do not edit below this line
module.exports = repeatString;
