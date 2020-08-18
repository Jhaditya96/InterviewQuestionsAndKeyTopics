1.ForEach is a array method will run based on size of array and 
  In For method you can fix a number of times as you can likely to do

2.A for loop is a construct that says "while this condition is met/perform this operation n. times".

> While a foreach loop is a construct that says "perform this operation against each value/object in this IEnumerable"

3.Some points to consider before using for or ForEach:

A.The good thing about forEach is that the callback function within it allows you to keep that variable within the 
  forEach’s scope. If you’ve assigned a variable outside and re-use it within the forEach, the outside variable retains its 
  value.
  	CODE:   const num = 4;
			const arr = [0, 1, 2];

			arr.forEach(num => {
			  console.log(num);
			});

			// Result:
			// 0
			// 1
			// 2
			console.log(num);

			// Result:
			// 4

B. Lower chance of accidental errors with forEach
   When using the forEach method, you’re calling on the Array.prototype method in relation to the array directly. When you use a 
   for loop, you have to set up a variable to increment (i), a condition to follow, and the actual increment itself.

	Based on the example above, let’s say that we wrote a for loop like this:

		for (let i = 0; i <= foodArray.length; i++) {
		  console.log(`i value: ${i} | Food Name:`, foodArray[i]);
		}

		// Result:
		// i value: 0 | Food Name: { name: 'Burrito' }
		// i value: 1 | Food Name: { name: 'Pizza' }
		// i value: 2 | Food Name: { name: 'Burger' }
		// i value: 3 | Food Name: { name: 'Pasta' }
		// i value: 4 | Food Name: undefined
	I changed my condition from < to a <=. Instead of ending at 3, which is less than the length of my array, it goes all the way
	to 4. Since there’s nothing in our array at index 4, it returns an undefined. This type of off-by-one-bug is a logic error when 
	your iterative loop iterates one more or less than you anticipated.

	Using a forEach loop, this can be avoided

C.forEach is easier to read....
		 
		  	for (let i = 0; i < foodArray.length; i++) {
		  let food = foodArray[i];
		  console.log(food);
		  for (let j = 0; j < food.ingredients.length; j++) {
		    let ingredient = food.ingredients[j];
		    console.log(ingredient);
		  }
		}	
  Instead
  			foodArray.forEach((food) => {
			  console.log(food);
			  food.ingredients.forEach((ingredient) => {
			    console.log(ingredient);
			  });
			});

D. You can break out of a for loop earlier
   One main reason why I would use the for loop is if I needed to break out of a loop early. If you wanted to only return a certain 
   food in your array, you could use an if statement to check if your criteria matches, and then break out from the loop. The
   forEach method would iterate over each food, which could lead to performance issues.

	Here’s an example of what the for loop would look like if you broke out of it early:

		for (let i = 0; i < foodArray.length; i++) {
		  if (foodArray[i].name === 'Pizza') {
		    console.log('I LOVE PIZZA');
		    break;
		  }
		}
    When we use the break keyword, we can stop the loop from continuing once we’ve found the condition we were looking for.


------------------------------------------INTERVIEW PERSPECTIVE AND QUESTION BASED ON THAT-----------------------------------------

The for loop executes a statement or a block of statements repeatedly until a specified expression evaluates to false. 
 
There is need to specify the loop bounds (minimum or maximum). Following is a code example of a simple for loop that starts 0 till 
<= 5. 
	int j = 0;  
	for (int i = 1; i <= 5; i++)  
	{  
	   j = j + i ;  
	}  
The foreach statement repeats a group of embedded statements for each element in an array or an object collection. You do not need
to specify the loop bounds minimum or maximum. The following code loops through all items of an array.
	int j = 0;  
	int[] myArr = new int[] { 0, 1, 2, 3, 5, 8, 13 };  
	foreach (int i in myArr )  
	{  
	   j = j + i ;  
	}  
>foreach: Treats everything as a collection and reduces the performance. foreach creates an instance of an enumerator (returned 
 from GetEnumerator()) and that enumerator also keeps state throughout the course of the foreach loop. It then repeatedly calls 
 for the Next() object on the enumerator and runs your code for each object it returns.

>Using for loop we can iterate a collection in both direction, that is from index 0 to 9 and from 9 to 0. But using for-each loop,
 the iteration is possible in forward direction only.

>In variable declaration, foreach has five variable declarations (three Int32 integers and two arrays of Int32) while for has only
 three (two Int32 integers and one Int32 array).

>When it goes to loop through, foreach copies the current array to a new one for the operation. While for doesn't care of that part. 
 Interviewer asked me 2 scenario based question in one interview:

					for (int i = 1; i <= 5; i++)  
					{  
					   i = i + i;  
					}  
The above code will work?

Yes this will work.

	int[] tempArr = new int[] { 0, 1, 2, 3, 5, 8, 13 };  
	foreach (int i in tempArr)  
	{  
	   i = i + 1;  
	}  
Above code will work?
This code will not compile. I have pasted screenshot of error.
	int j=0;
	int[] tempArr = new int[] { 0, 1, 2, 3, 5, 8, 13 };
	foreach (int i in tempArr)  
	{  
	   *i = i + 1; //*(local variable)int i  ERROR:cannot assign to 'i' because it is a 'forEach' iteration variable   
	}  	

foreach