/*
Problem
Create a function that takes an array of integers as an argument and returns an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

Example
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].

Output: [10, -65].

Bonus
If the input array is empty or null, return an empty array.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositiveAndSumNegative(array){
  let countPositive = 0;
  let sumOfNegative = 0;
  
  if(array.length === 0){
    console.log("This array is empty");
    return;
  }
  else if(array.length !== 0){
    for(let i=0 ; i<array.length ; i++){
      if(array[i] > 0){
        countPositive++;
        
      }else if(array[i] <= -1){
        sumOfNegative += array[i]; 
      }
      
    }//end for loop.
    
  }
  console.log("Number of positive numbers: " + countPositive);
  console.log("Summation of negative numbers: " + sumOfNegative);
}//end function.