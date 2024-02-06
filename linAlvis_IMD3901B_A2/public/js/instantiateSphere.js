'use strict' 

AFRAME.registerComponent('instantiate-sphere', {
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

    //get reference to button 
    //listen for when button is clicked ex. listen for 'click' event 
    //instantiate new sphere 
    //if clicked and sphere already exists, then delete it 

    const CONTEXT_AF = this; 
    CONTEXT_AF.sphereExists = false; 



    //this.el (or CONTEXT_AL.ef) refers to the element that this component is attached to 
    CONTEXT_AF.el.addEventListener('click', function() {
      if (CONTEXT_AF.sphereExists === true) {
        //delete sphere
        CONTEXT_AF.selectSphere = document.querySelector('#mySphere'); 
        CONTEXT_AF.selectSphere.remove(); 

        console.log('sphere delete'); 
        CONTEXT_AF.sphereExists = false; 
      }
      else {
        //instantiate sphere
        let sphere = document.createElement('a-entity'); 
        sphere.setAttribute('id', 'mySphere'); 
        sphere.setAttribute('position', '0 3 -3'); 
        sphere.setAttribute('geometry', 'primitive:sphere; radius: 1.0'); 
        sphere.setAttribute('material', 'color:blue'); 

        document.querySelector('a-scene').appendChild(sphere); 

        CONTEXT_AF.sphereExists = true; 
        console.log(sphere.getAttribute('id')); 
        console.log('sphere instantiate'); 



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