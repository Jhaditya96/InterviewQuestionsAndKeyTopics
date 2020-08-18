Q.What are the diffrent positions in JS?
A.static: every element has a static position by default, so the element will stick to the normal page flow. So if there is a 
  left/right/top/bottom/z-index set then there will be no effect on that element.
  
  relative: an element’s original position remains in the flow of the document, just like the static value. But now 
  left/right/top/bottom/z-index will work. The positional properties “nudge” the element from the original position in that 
  direction.
  
  absolute: the element is removed from the flow of the document and other elements will behave as if it’s not even there whilst 
  all the other positional properties will work on it.
  
  fixed: the element is removed from the flow of the document like absolutely positioned elements. In fact they behave almost the 
  same, only fixed positioned elements are always relative to the document, not any particular parent, and are unaffected by 
  scrolling.
  
  sticky (experimental): the element is treated like a relative value until the scroll location of the viewport reaches a specified 
  threshold, at which point the element takes a fixed position where it is told to stick.
  
  inherit: the position value doesn’t cascade, so this can be used to specifically force it to, and inherit the positioning value 
  from its parent.

  Link:"https://css-tricks.com/almanac/properties/p/position/"