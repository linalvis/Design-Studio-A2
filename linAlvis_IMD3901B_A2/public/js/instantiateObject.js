//instantiateObject listens for the click of a button and instantiates a object to the scene 
//it requires the object shape that it is instantiating, which will make a object appear with certain properties 
//it is a attribute 'instantiate-object' that is added onto the button component 

'use strict' 

AFRAME.registerComponent('instantiate-object', {
  schema: {
    // add attributse so you can pass shape type in the HTML file 
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

    // if the object is a sphere
    if (CONTEXT_AF.data.shapeType == 'sphere') {
        objectID = "#mySphere";
        objectIDAttribute = 'mySphere';  
        objectPrimitive = 'primitive:sphere; radius: 1.0'; 
        objectColor = 'color:#acfce4'; 
        objectPos = '0 2 -5'; 
        objectPosAnimated = '0 3 -5'; 
        objectManipulate = 'shapeType:sphere'; 
    }

    //if the object is a octahedron 
    else if (CONTEXT_AF.data.shapeType == 'octa') {
        objectID = "#myOcta";
        objectIDAttribute = 'myOcta';  
        objectPrimitive = 'primitive:octahedron; radius: 1.0'; 
        objectColor = 'color:#fc0a8b'; 
        objectPos = '9 2 3'; 
        objectPosAnimated = '9 3 3'; 
        objectManipulate = 'shapeType:octa'; 
    }

    //if the object is a tetrahedron 
    else if (CONTEXT_AF.data.shapeType == 'tetra') {
        objectID = "#myTetra";
        objectIDAttribute = 'myTetra';  
        objectPrimitive = 'primitive:tetrahedron; radius: 1.0'; 
        objectColor = 'color:#a76afc'; 
        objectPos = '-9 2 3'; 
        objectPosAnimated = '-9 3 3'; 
        objectManipulate = 'shapeType:tetra'; 
    }

    //listen for when the button has been clicked 
    //if an object already has been instantiated, then delete the object 
    CONTEXT_AF.el.addEventListener('click', function() {
      if (CONTEXT_AF.objectExists === true) {
        //delete object
        CONTEXT_AF.selectObject = document.querySelector(objectID); 
        CONTEXT_AF.selectObject.remove(); 

        console.log('object delete'); 
        CONTEXT_AF.objectExists = false; 
      }
      else {
        //instantiate new object with the attributes corresponding to the shapeType 
        let newObject = document.createElement('a-entity'); 
        newObject.setAttribute('id', objectIDAttribute); 
        newObject.setAttribute('class', 'interactive'); 
        newObject.setAttribute('position', objectPos); 
        newObject.setAttribute('scale', '1 1 1'); 
        newObject.setAttribute('geometry', objectPrimitive); 
        newObject.setAttribute('material', objectColor); 
        newObject.setAttribute('manipulate', objectManipulate); 

        //append it to the a-scene 
        document.querySelector('a-scene').appendChild(newObject); 

        CONTEXT_AF.objectExists = true; 
        console.log('object instantiate'); 

        //as the object gets instantiated, add a floating animation to it 
        newObject.setAttribute('animation__appear', {property: 'position', from: objectPos, to: objectPosAnimated, dur: 1400, 
                            easing: 'easeOutQuad'}); 

      }
    }); 

  }, 
}); 