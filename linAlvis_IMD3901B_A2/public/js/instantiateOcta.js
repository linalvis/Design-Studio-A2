'use strict' 

AFRAME.registerComponent('instantiate-octa', {
  schema: {

  }, 
  multiple:false, 
  init: function() {

    const CONTEXT_AF = this; 
    CONTEXT_AF.octaExists = false; 
    CONTEXT_AF.cursor = document.querySelector('#cursor'); 

    //this.el (or CONTEXT_AL.ef) refers to the element that this component is attached to 
    CONTEXT_AF.el.addEventListener('click', function() {
      if (CONTEXT_AF.octaExists === true) {
        //delete sphere
        CONTEXT_AF.selectOcta = document.querySelector('#myOcta'); 
        CONTEXT_AF.selectOcta.remove(); 

        console.log('octa delete'); 
        CONTEXT_AF.octaExists = false; 
      }
      else {
        //instantiate sphere
        let octa = document.createElement('a-entity'); 
        octa.setAttribute('id', 'myOcta'); 
        octa.setAttribute('class', 'interactive'); 
        octa.setAttribute('position', '9 2 3'); 
        octa.setAttribute('scale', '1 1 1'); 
        octa.setAttribute('geometry', 'primitive:octahedron; radius: 1.0'); 
        octa.setAttribute('material', 'color:#fc0a8b'); 
        octa.setAttribute('manipulate', 'shapeType:octa'); 

        document.querySelector('a-scene').appendChild(octa); 

        CONTEXT_AF.octaExists = true; 
        console.log(octa.getAttribute('select-sphere')); 
        console.log('octa instantiate'); 

        octa.setAttribute('animation__appear', {property: 'position', from: '9 2 3', to: '9 3 3', dur: 1400, 
                            easing: 'easeOutQuad'}); 

      }
    }); 

  }, 
}); 