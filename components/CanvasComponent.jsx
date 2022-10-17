import React, {useEffect, useRef} from 'react'
import {fabric} from 'fabric'

const CanvasComponent = () => {

    const canvas = useRef(null);

    useEffect(() => {
      canvas.current = initCanvas();
  
      canvas.current.on("mouse:over", () => {
        console.log('hello')
      });
      
      canvas.current.on('mouse:down', function(options) {
        console.log(options.e.clientX, options.e.clientY);
      });
      // destroy fabric on unmount
      return () => {
        canvas.current.dispose();
        canvas.current = null;
      };
    }, []);
  
    const initCanvas = () => (
      new fabric.Canvas('canvas', {
        height: 633,
        width: 1366,
        backgroundColor: 'gray' ,
        selection: true,
        renderOnAddRemove: true,
      })
    );
    
    return (
  
      <div >
        <canvas id="canvas" />
      </div>
  
    );
  }

export default CanvasComponent;