'use strict' 

AFRAME.registerComponent('manipulate', {
  schema: {
    isSphereClicked: {default: false}
  }, 
  multiple:false, 
  init: function() {

    const CONTEXT_AF = this; 
    //console.log("hello"); 
    
    CONTEXT_AF.el.addEventListener('click', function() {
        console.log("clicked!"); 
        CONTEXT_AF.data.isSphereClicked = true; 
    }); 

    CONTEXT_AF.el.addEventListener('dragstart', function(event) {
      console.log("drag!"); 
  });

  }, 

  tick: function() {
    const CONTEXT_AF = this; 
    if (CONTEXT_AF.data.isSphereClicked === true) {

      CONTEXT_AF.selectSphere = document.querySelector('#mySphere');  

      // CONTEXT_AF.selectSphere.setAttribute('animation', 
      //                                       {property: 'position', from: '0 3.5 -3', to: '0 3 -3',
      //                                       dur: 300, easing: 'linear', startEvents: 'click'});  

      CONTEXT_AF.data.isSphereClicked = false; 
    }
  }, 

  schema: {
    isDragging: { default: false },
    startPosition: { type: 'vec3' }
  },
  multiple: false,
  init: function () {
    const CONTEXT_AF = this;

    CONTEXT_AF.el.addEventListener('mousedown', function (event) {
      console.log("mousedown"); 
      CONTEXT_AF.data.isDragging = true;
      CONTEXT_AF.data.startPosition = CONTEXT_AF.el.object3D.position.clone();

      // Capture mousemove and mouseup events to continue dragging
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
      if (CONTEXT_AF.data.isDragging) {
        
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        //console.log(mouse); 

        // Update the raycaster with the mouse position
        raycaster.setFromCamera(mouse, CONTEXT_AF.el.sceneEl.camera);

        // Calculate intersection of the raycaster with the scene
        const intersects = raycaster.intersectObjects(CONTEXT_AF.el.sceneEl.object3D.children, true);

        // If the intersected object is the one being manipulated, update its position
        if (intersects.length > 0 && intersects[0].object === CONTEXT_AF.el.object3D) {
          const intersectionPoint = intersects[0].point;
          CONTEXT_AF.el.object3D.position.copy(intersectionPoint.sub(intersects[0].face.normal.multiplyScalar(0.5)));
        }
      }
    }

    function onMouseUp(event) {
      if (CONTEXT_AF.data.isDragging) {
        console.log("mouseup"); 
        CONTEXT_AF.data.isDragging = false;

        // Remove event listeners for mousemove and mouseup events
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
    }
  },
}); 