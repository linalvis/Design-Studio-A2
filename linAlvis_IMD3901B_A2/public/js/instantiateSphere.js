'use strict' 

AFRAME.registerComponent('instantiate-sphere', {
  schema: {

  }, 
  multiple:false, 
  init: function() { 

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
        sphere.setAttribute('material', 'color:#acfce4'); 
        sphere.setAttribute('manipulate', 'shapeType:sphere'); 

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