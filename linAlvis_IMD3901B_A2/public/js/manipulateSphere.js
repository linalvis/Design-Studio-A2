'use strict' 

AFRAME.registerComponent('manipulate', {
  schema: {

  }, 
  multiple:false, 
  init: function() {

    const CONTEXT_AF = this; 
    console.log("hello"); 
    
    CONTEXT_AF.el.addEventListener('click', function() {
        console.log("clicked!"); 
    }); 

  }, 
}); 