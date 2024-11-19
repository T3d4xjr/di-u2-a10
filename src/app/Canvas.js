import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';
//parte de como hacerlo con immer
/**import {use-immer} frm 'immer' */

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  /** const [shape, updateShape] useImmer({
   * color: 'orange',
    position: initialPosition
  }) */
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    
    setShape({
      ...shape,
      position:{
        x:shape.position.x += dx,
        y:shape.position.y += dy,
      }
    });
    

    // parte de codigo con immer
    /**updateShape(draft=>{
     * draft.position.x += dx,
     * draft.position.y += dy,
    }) */
    
  }

  function handleColorChange(e) {

    // parte de codigo con immer
    /**updateShape(draft=>{
     * draft.color=e.target.value,
    }) */
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        ¡Arrástrame!
      </Box>
    </>
  );
}
