//write a function called countDown that takes in a number and recursively console logs that  number - 1 until it gets to 0. At 0 console.log 'liftoff!'

//non recursive version
function countDownLoop(num) {
    for (num; num >= 0; num--) {
      if (num === 0){
        console.log('liftoff');
      }else {
        console.log(num)
      }
    }
  }

countDownLoop(5)
function countDown(num) {
  if (num === 0) {
    console.log('liftoff')
  }
  else {
    console.log(num);
    countDown(num - 1)
  }
}
// countDown(5)

function stringRecursion(str){
  //log each letter of the string until string is empty 
  
  //base case
  if(str.length === 0){
    console.log('end of string')
  }
  else {
    //subtract last char from parameter string

  //take a slice from 0 to second to last char -1
    let newStr = str.slice(0, str.length -1);
    console.log(newStr);
    //slice the last character 
    //run the function again with the string minus the last character

    stringRecursion(newStr);
  }
}
//write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() do not worry about negative bases and exponents
// https://www.youtube.com/watch?v=M2nmAAVFLzQ
function power(base, exponent) {
  //base case - stop recursing
  if (exponent === 0) {
    return 1
  };
  return base * power(base, exponent - 1);
}
console.log(power(2,4))


//factorial 
//https://www.youtube.com/watch?v=34xB5JUG4yA
//write a function which  which accepts a number and 
//returns the factorial of that number. 
//A factorial is the product of an integer and 
//all the integers below it; e.g., factorial four (4!) 
//is equal to 24, becayse 4 * 3 * 2 * 1 = 24
//factorial zero(0!) is always 1
function factorial(n){
    if (n < 0 ) return 0;
    if (n <= 1 ) return 1;
    return n * factorial(n-1);
 }

 //product of array 
 function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
productOfArray([2,1,4,8,3])