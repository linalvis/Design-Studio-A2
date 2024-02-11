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
    CONTEXT_AF.cursor = document.querySelector('#cursor'); 



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
        sphere.setAttribute('class', 'interactive'); 
        sphere.setAttribute('position', '0 2 -5'); 
        sphere.setAttribute('scale', '1 1 1'); 
        sphere.setAttribute('geometry', 'primitive:sphere; radius: 1.0'); 
        sphere.setAttribute('material', 'color:blue'); 
        sphere.setAttribute('manipulate', ''); 

        document.querySelector('a-scene').appendChild(sphere); 

        CONTEXT_AF.sphereExists = true; 
        console.log(sphere.getAttribute('select-sphere')); 
        console.log('sphere instantiate'); 

        sphere.setAttribute('animation__appear', {property: 'position', from: '0 2 -5', to: '0 3 -5', dur: 1400, 
                            easing: 'easeOutQuad'}); 

      }
    }); 

  }, 
}); 