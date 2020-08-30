
/*ANONYMOUS FUNTIONS
 An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation.
 They can be used as an argument to other functions or as an immediately invoked function execution as well.(see ex:4)
*/

//Types Of Anonymous functions

//1
console.log((x => x*x)(10));

//2
let show = function () {
    console.log('Anonymous function');
};
show();

//3
console.log((function fact(a)  {
  return (n <= 1) ? 1 : fact(n-1)*n;
  
})(10));

//4
let add = (a, b)  => a + b;
//OR
let show = () => console.log('Anonymous function');
//Short for
let show = function () {
    console.log('Anonymous function');
};

//5
//IIFE:Immediate-Invoked-Function-Expression( “self-executing anonymous function”)

function(){ /* code */ }(); // SyntaxError: Unexpected token (
function foo(){ /* code */ }(); // SyntaxError: Unexpected token )
//explanation:
(1).
As you can see, there’s a catch. When the parser encounters the function keyword in the global scope or inside a function,
it treats it as a function declaration (statement), and not as a function expression, by default. If you don’t explicitly
tell the parser to expect an expression, it sees what it thinks to be a function declaration without a name and throws a 
SyntaxError exception because function declarations require a name.
(2).
Interestingly enough, if you were to specify a name for that function and put parens immediately after it, the parser 
would also throw a SyntaxError, but for a different reason.

function foo(){ /* code */ }(); // SyntaxError: Unexpected token )

// Now, if you put an expression in the parenthesis, no exception is thrown...
//but the function isn't executed either,becoz  parens placed after a statement are totally separate from the preceding
//statment, and are simply a grouping operator.


//But this do not happen in JS becoz  in JavaScript, parenthesis can’t contain statements.At this point, when the parser 
//encounters the function keyword, it knows to parse it as a function expression and not a function declaration.
(function() {
    console.log('IIFE');
})();

>Advantages:
 One of the most advantageous side effects of Immediately-Invoked Function Expressions is that,because this unnamed,or 
 anonymous,function expression is invoked immediately, without using an identifier, a closure can be used without 
 polluting the current scope.

>I use anonymous functions for three reasons:

 --If no name is needed because the function is only ever called in one place, then why add a name to whatever namespace you are
   in.

   Inline function( An inline funcn is a funcn assigned to a variable that is created at runtime instead of at parsetime)
      
      (The difference b/w Anonymous & inline is that an inline function is assigned to a variable and so it can be reused
  	   and anonymous is created to be one time use basis).e.g
   			1.Anonymous function:
				function() {
    				console.log("Anonymous function")
					}
			
			2.Inline function
				var func = function() {
    				console.log("inline function saved in func variable.") 
					};								


 --Anonymous functions are declared inline and inline functions have advantages in that they can access variables in the parent 
   scopeopes. Yes, you can put a name on an anonymous function, but that's usually pointless if it's declared inline. So inline 
   has a significant advantage and if you're doing inline, there's little reason to put a name on it.

   e.g.				let obj = mainobject.filter(function(anony_obj1) {return anany_obj1.toLowerCase().split()
   							            .map((anany_obj2) => anany_obj2.replace(..)});

 --The code seems more self-contained and readable when handlers are defined right inside the code that is what calling them. 
   You can read the code in almost sequential fashion rather than having to go find the function with that name.


>Saving State With closure
 Just like when arguments may be passed when functions are invoked by their named identifier, they may also be passed 
 when immediately invoking a function expression. And because any function defined inside another function can access the
 outer function’s passed-in arguments and variables (this relationship is known as a closure), an Immediately-Invoked 
 Function Expression can be used to “lock in” values and effectively save state. 


>It’s still a good idea to use the parens when making an assignment, as a matter of convention.Such parenthesis typically 
 indicate that the function expression will be immediately invoked, and the variable will contain the result of the 
 function, not the function itself. This can save someone reading your code the trouble of having to scroll down to the
 bottom of what might be a very long function expression to see if it has been invoked or not.


------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------


											 The Module Pattern
>While I’m invoking function expressions, I’d be remiss if I didn’t at least mention the Module Pattern.  
 If you’re not familiar with the Module Pattern in JavaScript, it’s similar but with an Object being returned 
 instead of a Function (and is generally implemented as a singleton, as in this example).

Q.	  Create an anonymous function expression that gets invoked immediately,
	  and assign its *return value* to a variable. This approach "cuts out the middleman" 
	  of the named `makeWhatever` function reference.
   
Soln. As explained in the above "important note," even though parens are not
      required around this function expression, they should still be used as a
      matter of convention to help clarify that the variable is being set to
      the function's *result* and not the function itself.'

		  var counter = (function(){
		    var i = 0;

		    return {
		      get: function(){
		        return i;
		      },
		      set: function( val ){
		        i = val;
		      },
		      increment: function() {
		        return ++i;
		      }
		    };
		  }());

  // `counter` is an object with properties, which in this case happen to be methods.

  counter.get(); // 0
  counter.set( 3 );
  counter.increment(); // 4
  counter.increment(); // 5

  counter.i; // undefined (`i` is not a property of the returned object)
  i;	    // ReferenceError: i is not defined (it only exists inside the closure)

>The Module Pattern approach is not only incredibly powerful, but incredibly simple. With very little code, you can 
 effectively namespace related methods and properties, organizing entire modules of code in a way that both minimizes 
 global scope pollution and creates privacy.
