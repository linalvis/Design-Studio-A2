'use strict';

AFRAME.registerComponent('manipulate', {
  schema: {
    isClicked: { default: false },
  },
  multiple: false,
  init: function () {
    const CONTEXT_AF = this;
    CONTEXT_AF.mySphere = document.querySelector('#mySphere'); 
    CONTEXT_AF.audio1 = document.querySelector('#soulicious_music'); 
    CONTEXT_AF.audio1.load(); 

    CONTEXT_AF.mySphere.setAttribute('animation__startPulse', {property: 'scale', to: '1.2 1.2 1.2', dur: 670, 
                                                    loop: true, easing: 'linear', enabled: false}); 
    CONTEXT_AF.mySphere.setAttribute('animation__returnToDefault', {property: 'scale', to: '1 1 1', dur: 500, 
                                                    easing: 'linear', enabled: false}); 


    // mouseClick  mouseRelease
    CONTEXT_AF.el.addEventListener('mousedown', function (event) {
      console.log("sphere click"); 
      CONTEXT_AF.data.isClicked = true;
      CONTEXT_AF.mySphere.setAttribute('animation__returnToDefault', {enabled: false}); 
      CONTEXT_AF.mySphere.setAttribute('animation__startPulse', {enabled: true}); 
      CONTEXT_AF.audio1.play(); 

      // Capture mouseup events to continue dragging
      document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseUp(event) {
      if (CONTEXT_AF.data.isClicked === true) {
        console.log("sphere release"); 
        CONTEXT_AF.mySphere.setAttribute('animation__startPulse', {enabled: false}); 
        CONTEXT_AF.mySphere.setAttribute('animation__returnToDefault', {enabled: true}); 
        CONTEXT_AF.audio1.pause(); 
        CONTEXT_AF.data.isClicked = false;


        // Remove event listeners for mouseup events
        document.removeEventListener('mouseup', onMouseUp);
      }
    }

    function cyclePulseAnimation(isPlaying) {
      console.log("pulse"); 
      CONTEXT_AF.mySphere.setAttribute('animation__PulseOut', {property: 'scale', to: '1.2 1.2 1.2', dur: 630, 
      easing: 'linear', enabled: false}); 
      CONTEXT_AF.mySphere.setAttribute('animation__PulseIn', {property: 'scale', to: '1 1 1', dur: 40, 
      easing: 'linear', enabled: false}); 

      while (isPlaying === true) {
        CONTEXT_AF.mySphere.setAttribute('animation__PulseOut', {enabled: true});  
        CONTEXT_AF.mySphere.setAttribute('animation__PulseOut', {enabled: false});  
        CONTEXT_AF.mySphere.setAttribute('animation__PulseIn', {enabled: true});  
        CONTEXT_AF.mySphere.setAttribute('animation__PulseIn', {enabled: false});  
      }
    }
    
  },
});
