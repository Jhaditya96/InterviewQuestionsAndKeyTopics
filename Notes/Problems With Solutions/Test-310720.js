Q1.A number is said to be a twisted prime if it is a prime number and the reverse of the number is also a prime number.

    Input:
    The first line of input contains a number N.

    Output:
    Print the answer "Yes" or "No".

    sample input :
    97

    sample output :
    Yes

Soln.
      const readline = require("readline");

      const inp = readline.createInterface({
        input: process.stdin
      });

      const userInput = [];

      inp.on("line", (data) => {
        userInput.push(data);
      });

      inp.on("close", () => {
      //start-here
      function IsPrime(num){
          for(let i=2;i<num;i++){
              if(num%i===0){
                  return false
              }
          }
          return true
      }

      function revnum(num){
          let digitsarr = String(num).split("")
          let revnum = Number(digitsarr.reverse().join(""))
          return revnum
      }
      let n = +userInput[0]

      if(IsPrime(n) && IsPrime(revnum(n)) ){
          console.log("Yes")
      }else{
          console.log("No")
      }
      //end-here
      });
      
-------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------

Q2.Given an array A of size N, print the second largest element from an array.

    Input:
    The first line contains an number N denoting the size of the array. The second line contains the N space-separated 
    numbers of the array.

    Output:
    For each test case, in a new line, print the second largest element.

    sample input :
    5
    89 24 75 11 23

    sample output :
    75

    sample input :
    3
    2 2 1
    sample output :
    1


Soln.
      const readline = require("readline");

      const inp = readline.createInterface({
        input: process.stdin
      });

      const userInput = [];

      inp.on("line", (data) => {
        userInput.push(data);
      });

      inp.on("close", () => {
        //start-here
        //Your code goes here … replace the below line with your code logic 
      let n = +userInput[0]
      let nums = userInput[1].split(" ").map(val=>+val)
      let uniquearr = []

      for(i of nums){
          if(uniquearr.indexOf(i)===-1){
              uniquearr.push(i)
          }else{
              // pass
          }
      }
      uniquearr.sort((a,b)=>b-a)
      console.log(uniquearr[1])
        //end-here
      });

---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------

Q3.Write a program to find the sum of bit differences in all pairs that can be formed from array elements n. Bit 
   difference a pair (x, y) is a count of different bits at the same positions in binary representations of x and y.
   For example, bitdifference for 2 and 7 is 2. The binary representation of 2 is 010 and 7 is 111 ( first and last bits
   differ in two numbers).

    Explanation For Sample Test Case: 
    1: 01
    2: 10
    Bit difference in pair (1, 2): 2
    Bit difference in pair (2, 1): 2
    Hence, total Bit difference = 2 + 2 = 4

    Note: (a, b) and (b, a) are considered two separate pairs.

    sample input :
    2 
    1 2

    sample output :
    4

Soln.
      const readline = require("readline");

      const inp = readline.createInterface({
        input: process.stdin
      });

      const userInput = [];

      inp.on("line", (data) => {
        userInput.push(data);
      });

      inp.on("close", () => {
        //start-here
        //Your code goes here … replace the below line with your code logic 
      let n = +userInput[0]
      let nums = userInput[1].split(" ").map(val=>+val)

      let pairs = [];

      for(let i=0;i<n;i++){
          for(let j=i+1;j<n;j++){
              pairs.push([nums[i],nums[j]])
              pairs.push([nums[j],nums[i]])
          }
      }

      const bitDiffCount = (a, b) => {
        const bitStr = ((a ^ b) >>> 0).toString(2);
        return bitStr.split('1').length - 1;
      };
      let bitdiff = 0;

      for(i of pairs){
          bitdiff += bitDiffCount(i[0],i[1])
      }
      console.log(bitdiff)

        //end-here
      });