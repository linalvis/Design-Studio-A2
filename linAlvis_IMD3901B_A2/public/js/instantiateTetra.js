'use strict' 

AFRAME.registerComponent('instantiate-tetra', {
  schema: {

  }, 
  multiple:false, 
  init: function() {

    const CONTEXT_AF = this; 
    CONTEXT_AF.tetraExists = false; 
    CONTEXT_AF.cursor = document.querySelector('#cursor'); 

  //this.el (or CONTEXT_AL.ef) refers to the element that this component is attached to 
    CONTEXT_AF.el.addEventListener('click', function() {
      if (CONTEXT_AF.tetraExists === true) {
        //delete sphere
        CONTEXT_AF.selectTetra = document.querySelector('#myTetra'); 
        CONTEXT_AF.selectTetra.remove(); 

        console.log('tetra delete'); 
        CONTEXT_AF.tetraExists = false; 
      }
      else {
        //instantiate sphere
        let tetra = document.createElement('a-entity'); 
        tetra.setAttribute('id', 'myTetra'); 
        tetra.setAttribute('class', 'interactive'); 
        tetra.setAttribute('position', '-9 2 3'); 
        tetra.setAttribute('scale', '1 1 1'); 
        tetra.setAttribute('geometry', 'primitive:tetrahedron; radius: 1.0'); 
        tetra.setAttribute('material', 'color:#a76afc'); 
        tetra.setAttribute('manipulate', 'shapeType:tetra'); 

        document.querySelector('a-scene').appendChild(tetra); 

        CONTEXT_AF.tetraExists = true; 
        console.log(tetra.getAttribute('select-sphere')); 
        console.log('tetra instantiate'); 

        tetra.setAttribute('animation__appear', {property: 'position', from: '-9 2 3', to: '-9 3 3', dur: 1400, 
                            easing: 'easeOutQuad'}); 

      }
    }); 

  }, 
}); 