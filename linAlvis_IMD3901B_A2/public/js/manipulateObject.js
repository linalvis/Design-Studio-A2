'use strict';

AFRAME.registerComponent('manipulate', {
  schema: {
    isClicked: { default: false },
    shapeType: {type: 'string', default: 'sphere'}
  },
  multiple: false,
  init: function () {
    const CONTEXT_AF = this;
    CONTEXT_AF.myObject; 
    CONTEXT_AF.audioFile; 
    var songBPM = 0; 

    if (CONTEXT_AF.data.shapeType == 'sphere') {
      CONTEXT_AF.myObject = document.querySelector('#mySphere'); 
      CONTEXT_AF.audioFile = document.querySelector('#soulicious_music');    
      songBPM = 333; 
    }
    else if (CONTEXT_AF.data.shapeType == 'octa') {
      CONTEXT_AF.myObject = document.querySelector('#myOcta'); 
      CONTEXT_AF.audioFile = document.querySelector('#soulicious_music');    
    }
    else if (CONTEXT_AF.data.shapeType == 'tetra') {
      CONTEXT_AF.myObject = document.querySelector('#myTetra'); 
      CONTEXT_AF.audioFile = document.querySelector('#soulicious_music');    
    }

    CONTEXT_AF.audioFile.load(); 
    CONTEXT_AF.myObject.setAttribute('animation__startPulse', {property: 'scale', from: '1 1 1', to: '1.2 1.2 1.2', dur: songBPM, 
                                                    dir: 'alternate', loop: true, easing: 'easeInOutElastic', elasticity: '10000', enabled: false}); 
    CONTEXT_AF.myObject.setAttribute('animation__returnToDefault', {property: 'scale', to: '1 1 1', dur: 500, 
                                                    easing: 'linear', enabled: false}); 


    // mouseClick  mouseRelease
    CONTEXT_AF.el.addEventListener('mousedown', function (event) {
      console.log("object click"); 
      CONTEXT_AF.data.isClicked = true;
      CONTEXT_AF.myObject.setAttribute('animation__returnToDefault', {enabled: false}); 
      CONTEXT_AF.myObject.setAttribute('animation__startPulse', {enabled: true}); 
      CONTEXT_AF.audioFile.play(); 

      // Capture mouseup events to continue dragging
      document.addEventListener('mouseup', onMouseUp);
    });

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
