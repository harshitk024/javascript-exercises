

const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(nums) {

 return  nums.reduce((sum,value) => sum+value,0)
};

const multiply = function(nums) {
  return  nums.reduce((sum,value) => sum*value,1)
};

const power = function(x,y) {
    return x**y;	
};

const factorial = function(num) {
  let result = 1;
  for(let i =1;i<=num;i++){
       result = result*i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
