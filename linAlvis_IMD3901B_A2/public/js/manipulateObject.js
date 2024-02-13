//manipulateObject listens for when the user is holding on the instantiated object 
//when holding on the object, the object will play a song and pulse along with the beat 
//letting go of the object will pause the song 
//it requires the object shape that it is manipulating, which will play a corresponding song
//it is a attribute 'manipulate' that is added onto the button component 

'use strict';

AFRAME.registerComponent('manipulate', {
  schema: {
    // add attributse so you can pass shape type in the HTML file 
    isClicked: { default: false },
    shapeType: {type: 'string', default: 'sphere'}
  },
  multiple: false,
  init: function () {

    //set up default values for variables 
    const CONTEXT_AF = this;
    CONTEXT_AF.myObject; 
    CONTEXT_AF.audioFile; 
    var songBPM = 0; 
    var objectPos = "0 0 0"; 

    //if the object is a sphere, query for the sphere object and the corresponding song 
    if (CONTEXT_AF.data.shapeType == 'sphere') {
      CONTEXT_AF.myObject = document.querySelector('#mySphere'); 
      CONTEXT_AF.audioFile = document.querySelector('#OmarApollo');    
      songBPM = 316; 
    }
    //if the object is a octahedron, query for the octa object and the corresponding song 
    else if (CONTEXT_AF.data.shapeType == 'octa') {
      CONTEXT_AF.myObject = document.querySelector('#myOcta'); 
      CONTEXT_AF.audioFile = document.querySelector('#Blackpink');   
      songBPM = 230;  
    }
    //if the object is a tetrahedron, query for the tetra object and the corresponding song 
    else if (CONTEXT_AF.data.shapeType == 'tetra') {
      CONTEXT_AF.myObject = document.querySelector('#myTetra'); 
      CONTEXT_AF.audioFile = document.querySelector('#BadBunny');  
      songBPM = 266;    
    }
    //load up the audio that has been queried and set it to loop 
    CONTEXT_AF.audioFile.setAttribute('loop', 'true'); 
    CONTEXT_AF.audioFile.load(); 
    //set up animations for the pulse and stop pulsing events, set them to not be enabled yet 
    CONTEXT_AF.myObject.setAttribute('animation__startPulse', {property: 'scale', from: '1 1 1', to: '1.2 1.2 1.2', dur: songBPM, 
                                                    dir: 'alternate', loop: true, easing: 'easeInOutElastic', elasticity: '10000', enabled: false}); 
    CONTEXT_AF.myObject.setAttribute('animation__returnToDefault', {property: 'scale', to: '1 1 1', dur: 500, 
                                                    easing: 'linear', enabled: false}); 


    // listen for when the user is holding their mouse down 
    //When doing so, play the pulsing animation and the song 
    CONTEXT_AF.el.addEventListener('mousedown', function (event) {
      console.log("object click"); 
      CONTEXT_AF.data.isClicked = true;
      CONTEXT_AF.myObject.setAttribute('animation__returnToDefault', {enabled: false}); 
      CONTEXT_AF.myObject.setAttribute('animation__startPulse', {enabled: true}); 
      CONTEXT_AF.audioFile.play(); 

      // listen for when the mouse has been released 
      document.addEventListener('mouseup', onMouseUp);
    });

    //when the mouse has been released, pause the song and play the animation that returns the object to its default state 
    function onMouseUp(event) {
      if (CONTEXT_AF.data.isClicked === true) {
        console.log("object release"); 
        CONTEXT_AF.myObject.setAttribute('animation__startPulse', {enabled: false}); 
        CONTEXT_AF.myObject.setAttribute('animation__returnToDefault', {enabled: true}); 
        CONTEXT_AF.audioFile.pause(); 
        CONTEXT_AF.data.isClicked = false;


        // Remove event listeners for mouseup events
        document.removeEventListener('mouseup', onMouseUp);
      }
    }
    
  },
});
