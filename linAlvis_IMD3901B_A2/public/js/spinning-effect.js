'use strict' 

AFRAME.registerComponent('spinning-effect', {
  schema: {

  }, 
  multiple:false, 
  init: function() {
    //get refeerence to the walls 
    //get reference to button 
    //then we will add the animation component 
    //listen for when button is clicked, ex. listen for 'click' event 
    //play animation 
    //if clicked and animation is already playing. then pause it 

    const CONTEXT_AF = this; 
    CONTEXT_AF.walls = document.querySelector('#walls'); 
    CONTEXT_AF.isSpinning = false; 

    CONTEXT_AF.walls.setAttribute('animation', {property: 'rotation.y', to: 360, loop: true, dur: CONTEXT_AF.data.duration, 
                                                    easing: 'linear', enabled: false}); 

    //this.el (or CONTEXT_AL.ef) refers to the element that this component is attached to 
    CONTEXT_AF.el.addEventListener('click', function() {
      if (CONTEXT_AF.isSpinning === true) {
        //stop spinning 
        console.log('stop spinning'); 
        CONTEXT_AF.walls.setAttribute('animation', {enabled: false}); 
        CONTEXT_AF.isSpinning = false; 
      }
      else {
        //start spinning 
        console.log('start spinning'); 
        CONTEXT_AF.walls.setAttribute('animation', {enabled: true}); 
        CONTEXT_AF.isSpinning = true; 
      }
    }); 

  }, 
  // update: function() {olddate},           //is not OF updates, it is only called when a property in the schema changes
  // tick: function() {time, timeDelta},     //is called every update 
  // tock: function() {time, timeDelta},     //is called immediately after tick 
  // remove: function() {}, 
  // pause: function() {}, 
  // play: function() {}, 
  // updateSchema: function() {}, 
}); 