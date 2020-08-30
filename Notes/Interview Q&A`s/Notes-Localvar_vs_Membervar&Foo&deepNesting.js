Q.Diffrence between local variable and member variable?
Soln.-A member variable is a member of a type and belongs to that type of state.
	 -A local variable is not a member of a type and represents local storage rather than the state of
	  an instance of a given type.
	  
	  A local variable is the variable declared in a function.
	  A member variable is the variable declared in a class definition.

	  There are two kinds of member variable: instance and static.
	  -An instance variable lasts as long as the instance of the class.There will be one copy of it per instance.
	  -A static variable lasts as long as the class.There is one copy of it for the entire class.

	  A local variable is declared in a method and only lasts until the method returns:


	  CODE:
	  class Program
	  {
    	static void Main()
    	  {
            // This is a local variable. Its lifespan
            // is determined by lexical scope.
        	Foo foo;
    	  }
	  }

	  class Foo
  	  {
     	// This is a member variable - a new instance
     	// of this variable will be created for each 
     	// new instance of Foo.  The lifespan of this
     	// variable is equal to the lifespan of "this"
     	// instance of Foo.
     	int bar;
 	  }



Q.What is foo()?
Soln.Foo (pronounced FOO) is a term used by programmers as a placeholder for a value that can change, 
	 depending on conditions or on information passed to the program.
	 Foo and other words like it are formally known as metasyntactic variables. It can be helpful to
	 use metasyntactic variables when creating sample code because programmers don't have to create' 
	 unique names for each variable value. Nonsense placeholders make it easier to focus on the code's'
	 core concept and functional goal.

Q. What is deep nesting?
Soln.Deeply nested code is a common feature of structured programming which is a useful tool in most situations
	 While it has some advantages, it is frequently considered as hard to read and an anti-pattern.
	 "Flat is better than nested".
	 	Specifically, nested control flow – conditional blocks (if) or loops (for, while) – is hard to understand 
	 beyond three levels of nesting, and has high cyclomatic complexity. 
	 This is known as “Dangerously Deep Nesting” or, in the case of nested if statements, the “Arrow Anti Pattern”, 
	 due to the following shape:

								 	 if
								       if
								         if
								           if
								             do something
								           endif
								         endif
								       endif
								     endif
	This has a number of problems:

	-The code is hard to read.
 	-Context is hard to understand, due to multiple levels of indentation.
	-Cleanup happens vertically far from the original cause: if a resource is acquired (say, memory allocated,
	 file opened) at the top, in one indentation level, the cleanup occurs at the same indentation level, but 
	 at the bottom, vertically far.Other than refactoring or avoiding this code, one technique to handle deeply 
	 nested code is code folding in editors – this allows you to collapse a block, yielding abstraction and allowing 
	 you to see the surrounding code easily without the intervening code (so resource acquisition and cleanup are both 
	 visible).