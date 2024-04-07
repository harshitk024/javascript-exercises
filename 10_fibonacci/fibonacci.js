const fibonacci = function(term) {

    let a = 0 , b = 1;
    let fib = 0;

    term = parseInt(term)

    if(term < 0){
        return "OOPS"
    }

    if(term == 1){
        return 1;
    }
    
    for(let i = 2;i<= term;i++){
       fib = a+b;
       a = b;
       b = fib;
    }

    return fib

};

// Do not edit below this line
module.exports = fibonacci;
