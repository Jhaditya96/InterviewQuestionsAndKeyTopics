Q.Inline vs Block?
A.There are two display values: block and inline
	A block-level element always starts on a new line and takes up the full width available
	An inline element does not start on a new line and it only takes up as much width as necessary
	The <div> element is a block-level and is often used as a container for other HTML elements
	The <span> element is an inline container used to mark up a part of a text, or a part of a document.

	Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.

	Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after
	the element, so a block element doesn’t sit next to other elements.

	LINK: "https://alligator.io/css/display-inline-vs-inline-block/"

 Another Approach:
 1.Inline
   Displays an element as an inline element. Any height and width properties will have no effect.
   -------------------------------------------
   Inline  Inline Inline Inline Inline Inline	

   Inline  Inline Inline
   -------------------------------------------
   inline elements do NOT start on a new line and only takes up as much width as its content. So, 
   if you try to set any width and height, it will have NO effects.
	.inline-element {
	  display: inline;
	  width: 1000px; /* ❌ won't have any effect */
	  height: 1000px; /* ❌ won't have any effect */
	}

	inline elements
	Here are a few elements that have a default inline property:

		span
		a
		img
		
	And most of the formatting tags are also are inherently inline:

		em
		strong
		i
		small

 2.Inline-block
   Displays an element as an inline-level block container. You CAN set height and width values.

   ------------------------------------------------------------

   ------    --------------		------------
   inline    inline 			inline
   ------

   			 --------------

   			 					------------
   ------------------------------------------------------------
   i.e adjusted width and height

   .inline-block-element {
	  display: inline;
	  width: 1000px; /* ❌ It will work */
	  height: 1000px; /* ❌ It will work */
	}

 3.block
   check the height of the string.Always starts with new line.

   -----------------------------------------------------------

   ---------
     block
   ---------

   ---------
     block
   ---------

   -----------------------------------------------------------

   Here are a few elements that have a default block property:

	div
	h1
	p
	li
	section

 Conclusion:
 >Inline The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.

 >Inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and 
  height values.

 >Block The element will start on a new line and occupy the full width available. And you can set width and height values.

 //3rd Approach:
--Inline elements:

	respect left & right margins and padding, but not top & bottom
	cannot have a width and height set
	allow other elements to sit to their left and right.
	see very important side notes on this here.

--Block elements:

	respect all of those
	force a line break after the block element
	acquires full-width if width not defined
	
--Inline-block elements:

	allow other elements to sit to their left and right
	respect top & bottom margins and padding
	respect height and width.