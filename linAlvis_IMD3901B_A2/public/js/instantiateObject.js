'use strict' 

AFRAME.registerComponent('instantiate-object', {
  schema: {
    shapeType: {type: 'string', default: 'sphere'}
  }, 
  multiple:false, 
  init: function() { 

    // Setting up default values for variables 
    const CONTEXT_AF = this; 
    CONTEXT_AF.objectExists = false; 
    var objectID = "#mySphere"; 
    var objectIDAttribute = 'mySphere'; 
    var objectPrimitive = 'primitive:sphere; radius: 1.0';  
    var objectColor = 'color:#acfce4'; 
    var objectPos = '0 2 -5'; 
    var objectPosAnimated = '0 3 -5'; 
    var objectManipulate = 'shapeType:sphere'; 

    if (CONTEXT_AF.data.shapeType == 'sphere') {
        objectID = "#mySphere";
        objectIDAttribute = 'mySphere';  
        objectPrimitive = 'primitive:sphere; radius: 1.0'; 
        objectColor = 'color:#acfce4'; 
        objectPos = '0 2 -5'; 
        objectPosAnimated = '0 3 -5'; 
        objectManipulate = 'shapeType:sphere'; 
    }

    else if (CONTEXT_AF.data.shapeType == 'octa') {
        objectID = "#myOcta";
        objectIDAttribute = 'myOcta';  
        objectPrimitive = 'primitive:octahedron; radius: 1.0'; 
        objectColor = 'color:#fc0a8b'; 
        objectPos = '9 2 3'; 
        objectPosAnimated = '9 3 3'; 
        objectManipulate = 'shapeType:octa'; 
    }

    else if (CONTEXT_AF.data.shapeType == 'tetra') {
        objectID = "#myTetra";
        objectIDAttribute = 'myTetra';  
        objectPrimitive = 'primitive:tetrahedron; radius: 1.0'; 
        objectColor = 'color:#a76afc'; 
        objectPos = '-9 2 3'; 
        objectPosAnimated = '-9 3 3'; 
        objectManipulate = 'shapeType:tetra'; 
    }

    //this.el (or CONTEXT_AL.ef) refers to the element that this component is attached to 
    CONTEXT_AF.el.addEventListener('click', function() {
      if (CONTEXT_AF.objectExists === true) {
        //delete sphere
        CONTEXT_AF.selectSphere = document.querySelector(objectID); 
        CONTEXT_AF.selectSphere.remove(); 

        console.log('object delete'); 
        CONTEXT_AF.objectExists = false; 
      }
      else {
        //instantiate sphere
        let newObject = document.createElement('a-entity'); 
        newObject.setAttribute('id', objectIDAttribute); 
        newObject.setAttribute('class', 'interactive'); 
        newObject.setAttribute('position', objectPos); 
        newObject.setAttribute('scale', '1 1 1'); 
        newObject.setAttribute('geometry', objectPrimitive); 
        newObject.setAttribute('material', objectColor); 
        newObject.setAttribute('manipulate', objectManipulate); 

        document.querySelector('a-scene').appendChild(newObject); 

        CONTEXT_AF.objectExists = true; 
        console.log('object instantiate'); 

        newObject.setAttribute('animation__appear', {property: 'position', from: objectPos, to: objectPosAnimated, dur: 1400, 
                            easing: 'easeOutQuad'}); 

      }
    }); 

  }, 
}); 