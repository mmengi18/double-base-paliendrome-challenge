/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      // Don't worry about capitalization.
*/

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
      // palindromic is a number that are the same if it is read backwardds and frontwards
      // the decimal number 585 with the base 2 is palindromic in both bases
Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
      // find all the numbers less than million 
      // for example base number for 222 is 1010101 this is palendromic
      // find numbers like that in the range between 1 - 1000000
      // the base numbers are 2 and 10
      // how do we check for every number less than 1000000 is palindrome
            // do we have to convert EVERY number less than 1000000 to base 10 - that is a lengthy process
                  // how do we convert the numbers to base 10
            
            // to check if the number is palendromic, change the number to a string and see if it is palendromic
            // change th number from decimal - base 10 - to binary base 2
      // for each number determine if the number is palendromic in base 10
            // if it is check if the number is palendromic in base 2
                  // if it is then add the sum of the number 
                  // else dont

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/

// cast the number to a string to check if it is palendrome
      // to check if the STRING is palindrome
      /* 
            check if the first and last character is the same
            then check if the number is the same from the last middle and from the first middle
            // this is how we cheack
                  // a-> b->c->                  -<c<-b <-a
            // if this characters are not the same then return false/
    */     
// now that we have checked if it is a palidrome, lets convert the number into base2
      var input = 1000000
      var output = input.toString(2)
      console.log(output)
      // console.log(output) will produce '11110100001001000000'
const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {
      
}

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}