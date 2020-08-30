Q.What is JS?
Soln. JavaScript is a single-threaded asynchronous programming language.Single-threaded basically means that JS runs 
	  code one line at a time manner.There is no way it works parellely.
	  Disadvantages:
	  1.When your code gets stuck while running and cannot get out of the condn. your whole systems gets shut-down and
	  only way is to close the whole program
	  2.A text book e.g. is when you make a network request and your asynchronous code is gonna take time to come back
	  to it.The below e.g. is your asynchronous code written in blocking way:
	  Code:
	  makeNetworkRequest();
	  while(!networkRequestReturned()){
	  	//just looping
	  }
	  //runs after request returned
	  This code blocks the line of execution at the condition to check weather the network request has returned and
	  meanwhile the main-thread or the runtime will stay blocked while no other work can be done by user-inputs or
	  request.
	  		 So how to solve such problem in JS one way is Using Callback,
	  Code:
	  		makeNetworkRequest(CallbackFunction)

	  		How it works: When we use a Callback function we make the network request but with that we also specify
	  a Callback function.A function which will be called back when out network returns hence our JS code does not 
	  have to keep waiting for the network to returns.

	-----------------------------------------------xxxxxxxxxxxxxxxx--------------------------------------------------  
	Memory Organization In JavaScript
  ->So in any system we use heap or stack to save the Memory.One while saves everythinng in random sequence while the
  	latter saves in LIFO manner.For understanding EventLoops we will understanding Stack  first:
  	Code:
  	function LevelTwo(){
  		console.log('Inside Level two!');
  	}
  	function LevelOne(){
  		LevelTwo();
  	}  
  	function main(){
  		LevelOne();
  	}
  	Execution of above code in stack: How it works in JS
  	|				  |  	
  	|				  |					
  	|				  |	
  	|				  |	
  	|				  |
  	|				  | 
  	|	 console.log  |
  	|	  LevelTwo	  |
  	|	  LevelOne	  |	
  	|		Main	  |
    -------------------

    ------------------------------------------------xxxxxxxxxxxxxxxxxx----------------------------------------------------

    WEB API
  ->They are a set of functionalities that help us perform difficult tasks which are very difficult to perform on the main
  	thread(think of them as capabilites provided to us by the browser).And that is how it helps us to perform somewhat 
  	multiple tasks by exporting tasks to browser by Web APIs which has the capabilites of responding multiple threads.

  	For e.g.
  	DOM
  	Ajax(n/w requests)-----Consider a n/w request which browser can delegate to another thread and wait for response.
  	setTimeout()-----------when you call it,The browser can delegate the timer for sec or milli-sec.

  			Hence,JS is single-threaded but browser isn`t ` and so Web APIs can work on these tasks parallely.
  	So,

  	Q."What is EventLoops"?
  	Soln.The EventLoop is that entity which pulls stuff out of the event queue and places it on the function execution 
  	stack whenever the stack becomes empty.

  	An "EventQueue" is a queue which keeps track of all the events that are pending to get executed in JS.They are
  	that piece of code that are waiting to run but has not gotten scheduled to run by main-thread or OS.

  	How it works?

  	Lets take an example of setTimeout(5000) i.e. For 5 sec.
  	When it excutes the setTimeout() function goes to stack and with that it runs.Once executed it causes a Web API
  	provided to us provided by browser.This Web API then fires a timer for 5 sec.Meanwhile,the setTimeout function is
  	executed as far as runtime is Considered and code execution continues.After 5 seconds have ellapsed the Web API 
  	then takes this function and places it in the event queue.
  				Note: That the Callback() function has not been called till now and is waiting in JS runtime for its 
  	turn.When the function stack becomes empty i.e. all the other tasks are loaded off the stack.That is when 
  	"EventLoops" comes into the picture.It takes the first function waiting in the EventQueue for its turn and places
  	it onto the stack in this case "Callback function".Then onwards that function excutes calling other functions 
  	if any.This cycle is continued and that is how it gives us multi-threaded functionalty while having one-thread.


   Q.But if JS is single-threaded and code of execution has already moved ahead of its line execution then who is 
   calling the call back method....?
   
   Q. function func(){
   	console.log('alpha');
   	setTimeout(console.log('beta'),0);
   	console.log('gamma');
   }
   func();
   How will it excute?

   Soln.The setTimeout() function expects a function as its first argument.As the question stands now, the console output 
        will be,
			   alpha
			   beta
			   gamma
   However,if we pass a function to the set setTimeout() like this:setTimeout(function(){console.log('beta')},then the 
   following takes place.

   First,func() is added to the call stack and its execution is started.Following theat the statement console.log('alpha') 
   is executed and 'alpha' is printed to the console.

   When the runtime reaches the single-threaded() call. it is handed over to the view thread the When API(including the 
   Callback which is function(){console.log('beta')}),and the setTimeout() is popped from the call stack.Then the runtime 
   moves on to the next statement() which is the console.log('gamma'),excutes it and prints 'gamma' to the One.
     
   In the meantime,the book sets a timer on a seroerate thread and once the timeer runs out(in this case even though 
   it is `0s` the timer needs to be set and resulved) it sends the Callback to the event queue.
     
   Once the runtime has completed executing the last function call int eh call stack,it checks the even queue and adds 
   the first function from the event queue to the call stack(in this case function(){console.log('beta')} which 
   was the callback for the setTimeout() function).It then excutes the statement console.log('beta'),and prints 'beta' 
   to the console.
     
   The order of functions and statements executed from the call stack are as follows:
     1.func()
     2.console.log('alpha')
     3.setTimeout(callback,...)------>Callback sent to browser through Web API 
     4.console.log('gamma')
     5.console.log('beta')<-----------callback taken from event queue put there by the browser upon successful resolution
       of timer.
       The output is as follows:
       alpha
       gamma 
       beta
     NOTE:All the setTimeout functions get executed one by one and callbacks are added to event queue.Then,after elapsing 
     the timer,the 3 console.log statements are added to the event loop.And at last,they are popped from the event queue
     and excuted.  
