Q.What is Regualar expression?
A.A regular expression is a sequence of characters that defines a search pattern.Usually such search patterns are used by string  
  searching algorithms for "find" or "find and replace" operations on string or input validation.
  		Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are 
  also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(),
  replaceAll(), search(), and split() methods of String.

>>*Which attribute to use to match regex?
A.Pattern
  The pattern attribute specifies a regular expression the form control's value should match. If a non-null value doesn't conform
  to the constraints set by the pattern value, the  ValidityState object's read-only patternMismatch property will be true.'

  The pattern attribute is an attribute of the text, tel, email, url, password,  and search input types.
  The pattern attribute, when specified, is a regular expression which the input's value must match in order for the value to pass'
  constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type, and as documented in our 
  guide on regular expressions; the 'u' flag is specified when compiling the regular expression, so that the pattern is treated as 
  a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.
           If the specified pattern is not specified or is invalid, no regular expression is applied and this attribute is ignored.  

>>What is a regular expression and what makes it so important?
  Regex are used in Google analytics in URL matching in supporting search and replace in most popular editors like Sublime, 
  Notepad++, Brackets, Google Docs and Microsoft word.

>>How to write regular patterns?
  Repeaters : * , + and { } :
	These symbols act as repeaters and tell the computer that the preceding character is to be used for more than just one time.
	The asterisk symbol ( * ):
	It tells the computer to match the preceding character (or set of characters) for 0 or more times (upto infinite).
	Example : The regular expression ab*c will give ac, abc, abbc, 
	abbbc….ans so on 
	The Plus symbol ( + ):
	It tells the computer to repeat the preceding character (or set of characters) for atleast one or more times(upto infinite).
	Example : The regular expression ab+c will give abc, abbc,
	abbc, … and so on.
	The curly braces {…}:
	It tells the computer to repeat the preceding character (or set of characters) for as many times as the value inside this 
	bracket.
	Example : {2} means that the preceding character is to be repeated 2 
	times, {min,} means the preceding character is matches min or  more 
	times. {min,max} means that the preceding character is repeated at
	least min & at most max times.
	Wildcard – ( . )
	The dot symbol can take place of any other symbol, that is why it
	is called the wildcard character.
	Example : 
	The Regular expression .* will tell the computer that any character
	can be used any number of times.
	Optional character – ( ? )
	This symbol tells the computer that the preceding character may
	or may not be present in the string to be matched.
	Example : 
	We may write the format for document file as – “docx?”
	The ‘?’ tells the computer that x may or may not be 
	present in the name of file format.
	The caret ( ^ ) symbol: Setting position for match :tells the computer that the match must start at the beginning of the string
	or line.
	Example : ^\d{3} will match with patterns like "901" in "901-333-".
	The dollar ( $ ) symbol
	It tells the computer that the match must occur at the end of the string or before \n at the end of the line or string.
	Example : -\d{3}$  will match with patterns like "-333" in "-901-333".
	Character Classes
	A character class matches any one of a set of characters. It is used to match the most basic element of a language like a letter, 
	a digit, space, a symbol etc.
	/s : matches any whitespace characters such as space and tab
	/S : matches any non-whitespace characters
	/d : matches any digit character
	/D : matches any non-digit characters
	/w : matches any word character (basically alpha-numeric)
	/W : matches any non-word character
	/b : matches any word boundary (this would include spaces, dashes, commas, semi-colons, etc)



	[set_of_characters] – Matches any single character in set_of_characters. By default, the match is case-sensitive.

	Example : [abc] will match characters a,b and c in any string.
	[^set_of_characters] – Negation: Matches any single character that is not in set_of_characters. By default, the match is case 
	sensitive.

	Example : [^abc] will match any character except a,b,c .
	[first-last] – Character range: Matches any single character in the range from first to last.

	Example : [a-zA-z] will match any character from a to z or A to Z.
	The Escape Symbol : \
	If you want to match for the actual ‘+’, ‘.’ etc characters, add a backslash( \ ) before that character. This will tell the 
	computer to treat the following character as a search character and consider it for matching pattern.

	Example : \d+[\+-x\*]\d+ will match patterns like "2+2"
	and "3*9" in "(2+2) * 3*9".
	Grouping Characters ( )
	A set of different symbols of a regular expression can be grouped together to act as a single unit and behave as a block, for 
	this, you need to wrap the regular expression in the parenthesis( ).

	Example : ([A-Z]\w+) contains two different elements of the regular 
	expression combined together. This expression will match any pattern 
	containing uppercase letter followed by any character.
	Vertical Bar ( | ) :
	Matches any one element separated by the vertical bar (|) character.

	Example :  th(e|is|at) will match words - the, this and that.
	\number :
	Backreference: allows a previously matched sub-expression(expression captured or enclosed within circular brackets ) to be 
	identified subsequently in the same regular expression. \n means that group enclosed within the n-th bracket will be repeated 
	at current position.
	Example : ([a-z])\1 will match “ee” in Geek because the character 
	at second position is same as character at position 1 of the match.
	Comment : (?# comment) –
	Inline comment: The comment ends at the first closing parenthesis.
	Example : \bA(?#This is an inline comment)\w+\b
	# [to end of line] : X-mode comment. The comment starts at an unescaped # and continues to the end of the line.

	Example :  (?x)\bA\w+\b#Matches words starting with A.

	--------------------------------------Another Example For Understanding and Also Cheatsheet Link:----------------------------------
  Example :  Regular expression for an email address :
  ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ 
  The above regular expression can be used for checking if a given set of characters is an email address or not.
  
 -E.g.:/ab*c/: the * after "b" means "0 or more occurrences of the preceding item." In the string "cbbabbbbcdebc", this pattern 
  will match the substring "abbbbc".
  	/abc/ matches character combinations in strings only when the exact sequence "abc" occurs (all characters together and in that
  order). Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft."
  In both cases the match is with the substring "abc". There is no match in the string "Grab crab" because while it contains the 
  substring "ab c", it does not contain the exact substring "abc".

  CHEATSHEET: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"

 -The following pages provide lists of the different special characters that fit into each category, along with descriptions and 
  examples.

>Assertions
 Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some 
 way that a match is possible (including look-ahead, look-behind, and conditional expressions).
>Character classes
 Distinguish different types of characters. For example, distinguishing between letters and digits.
>Groups and ranges
Indicate groups and ranges of expression characters.
>Quantifiers
 Indicate numbers of characters or expressions to match.
>Unicode property escapes
 Distinguish based on unicode character properties, for example, upper- and lower-case letters, math symbols, and punctuation.
 If you want to look at all the special characters that can be used in regular expressions in a single table, see the following:

>Special characters in regular expressions.

 \, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]	
 Character classes

 ^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B	
 Assertions

 (x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \Number	
 Groups and ranges

 *, +, ?, x{n}, x{n,}, x{n,m}	
 Quantifiers

 \p{UnicodeProperty}, \P{UnicodeProperty}	
 Unicode property escapes


 >>Escaping
 	If you need to use any of the special characters literally (actually searching for a "*", for instance), you must escape it by 
 	putting a backslash in front of it. For instance, to search for "a" followed by "*" followed by "b", you would use /a\*b/ — the 
 	backslash "escapes" the "*", making it literal instead of special.
					Similarly, if you are writing a regular expression literal and need to match a slash ("/"), you need to escape 
	that (otherwise, it terminates the pattern). For instance, to search for the string "/example/" followed by one or more 
	alphabetic characters, you would use /\/example\/[a-z]+/i—the backslashes before each slash make them literal.
             To match a literal backslash, you need to escape the backslash. For instance, to match the string "C:\" where "C"" 
    can be any letter, you would use /[A-Z]:\\/ — the first backslash escapes the one after it, so the expression searches for a single
    literal backslash.
					  If using the RegExp constructor with a string literal, remember that the backslash is an escape in string 
	literals, so to use it in the regular expression, you need to escape it at the string literal level. /a\*b/ and 
	new RegExp("a\\*b") create the same expression, which searches for "a" followed by a literal "*" followed by "b".
										If escape strings are not already part of your pattern you can add them using String.replace:
											
											function escapeRegExp(string) {
  												return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); 
  												// $& means the whole matched string
											}
	The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and 
	returning all matches.

