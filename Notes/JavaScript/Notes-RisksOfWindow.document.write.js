Q.What are the risks of using window.document.write?
A.>document.write (henceforth DW) does not work in XHTML.
  >DW does not directly modify the DOM, preventing further manipulation (trying to find evidence of this, but it is at best 
  situational)
  >*DW executed after the page has finished loading will overwrite the page, or write a new page, or not work
  >DW executes where encountered: it cannot inject at a given node point
  >DW is effectively writing serialised text which is not the way the DOM works conceptually, and is an easy way to create bugs  (.innerHTML has the same problem)