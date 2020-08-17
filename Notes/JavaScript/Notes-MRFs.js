For More To Learn: About Map , reduce() & filter() and to use them together also.READ
Link:https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209



//ARTICLE FOR USE OF MRF: MAP(),REDUCE() & FILTER()
//All of them are defined on Array.prototype() and so available on any array,and you pass callback as its first argument.
//CODE:- 
var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240
 
  }
 
];

											   Map in execution:
>>Map creates a new array by transforming every element in an array, individually.											   
//PROBLEM 1:Let's say we want to create a new array with just the name of each task, so we can take 
//a look at everything we've gotten done today.

// Method 1:Using a for loop, we'd write something like this:
var task_names = [];
 
for (var i = 0, max = tasks.length; i < max; i += 1) {
    task_names.push(tasks[i].name);
}

// Method 2:Using a forEach loop, we'd write something like this:
var task_names = [];

tasks.forEach(function (task) { 
    task_names.push(task.name);
});

//Method 3:Using map, we can write:
var task_names = tasks.map(function (task, index, array) {
    return task.name; 
});


---------------------------------------------------------------------------------------------------------|
	/*
	Important differences between the two approaches:
	1.Using map, you don't have to manage the state of the for loop yourself.
	2.You can operate on the element directly, rather than having to index into the array.
	3.You don't have to create a new array and push into it. map returns the finished product
	  all in one go, so we can simply assign the return value to a new variable.
	4.You do have to remember to include a return statement in your callback. If you don't, you'll
	  get a new array filled with undefined. 

	The fact that we don't have to manually manage the state of the loop makes our code simpler and
	more maintainable. The fact that we can operate directly on the element instead of having to index 
	into the array makes things more readable. 

	Using a forEach loop solves both of these problems for us. But map still has at least two distinct 
	advantages:

	forEach returns undefined, so it doesn't chain with other array methods. map returns an array, so 
	you can chain it with other array methods.
	map returns an array with the finished product, rather than requiring us to mutate an array inside 
	the loop. 
	*/
---------------------------------------------------------------------------------------------------------|


Note: Always make sure your callback contains a return statement in Map!or map will spit out an array full
      of undefined.
>If you do forget, map won't complain. Instead, it'll quietly hand back an array full of nothing. Silent errors
 like that can be surprisingly hard to debug. 


//CODE:-
 var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
 
  }
 
];

 												Filter in execution
>> filter() creates a new array by removing elements that do not belong. 												
//PROBLEM 2:Let's revisit our task example. Instead of pulling out the names of each task, let's say I want to
//           get a list of just the tasks that took me two hours or more to get done. 												 


//Method 1:Using forEach, we'd write:
var difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});

//Method 2:Using Filter:
var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});
 
// Using ES6
var difficult_tasks = tasks.filter((task) => task.duration >= 120 );

NOTE:-
>Assign its result directly to a new variable, rather than push into an array we defined elsewhere

>The callback you pass to map has to include a return statement if you want it to function properly.
 With filter, you also have to include a return statement, and you must make sure it returns a boolean value.

>If you forget your return statement, your callback will return undefined, which filter will unhelpfully coerce to false. 
 Instead of throwing an error, it will silently return an empty array! 

>Always make sure your callbacks include an explicit return statement.
 And always make sure your callbacks in filter return true or false. Your sanity will thank you.

----------------------------------------------------------------------------------------------------------------------------------

//CODE:-
 var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240
 
  }
 
];

 												Filter in execution 											
>>reduce() takes all of the elements in an array, and reduces them into a single value by some Math operation(add,sub,mul,etc..).
//It takes a second argument with first as callback and second to start combining all your array elements into a single value.
//Finally, bear in mind that reduce returns a single value, not an array containing a single item. This is more important than
// it might seem, and I'll come back to it in the examples.

//Method 1:Using forEach():
var numbers = [1, 2, 3, 4, 5],
    total = 0;
     
numbers.forEach(function (number) {
    total += number;
});

//Method 2:Using Filter
var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;  		//current-> is the first argument & previous is the second argument keeping single values.
}, 0);

step by step , it looks like this:
Iteration 	Previous	Current	Total
1			0			1		1
2			1			2		3
3			3			3		6
4			6			4		10
5			10		5		15


-Summing the reduce():
>To recap: reduce iterates over all the elements of an array, combining them however you specify in your callback. On every iteration,
 your callback has access to the previous value, which is the total-so-far, or accumulated value; the current value; the current index;
 and the entire array, if you need them.

Another examples:
//1
var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduce( function (previous, current) {
        return previous.concat(current);
});
 
console.log(concatenated); // [1, 2, 3, 4, 5, 6];

//2
var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduceRight( function (previous, current) {
        return previous.concat(current);
});
 
console.log(concatenated); // [5, 6, 3, 4, 1, 2];


For More To Learn:
https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209
