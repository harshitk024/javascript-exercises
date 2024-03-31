const removeFromArray = function(arr,...items) {


    for(const item of items){

       let index = arr.indexOf(item)

       // for removing all duplicates values

       while(index > -1){
              arr.splice(index,1)
              index = arr.indexOf(item)
       }
     }

   return arr
};

// Do not edit below this line
module.exports = removeFromArray;
