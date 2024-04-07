const getTheTitles = function(books) {

    let titles = []
    
   books.forEach(element => {
     if("title" in element){
        titles.push(element.title)
     }
   });
  
   return titles


};



// Do not edit below this line
module.exports = getTheTitles;
