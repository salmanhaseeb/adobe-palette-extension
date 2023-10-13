import React, { useState } from 'react';

import { ColorPicker } from "../components/ColorPicker.jsx";
// import {App} from "../../../../random-palette-react-app/src/App.tsx"
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r},${g},${b})`;
//   }

export const Demos = () => {

    // const [palette, setPalette] = useState<[]>([]);

    // // Function to generate a random color palette
    // function generatePalette() {
    //   const newPalette = [];
    //   for (let i = 0; i < 5; i++) {
    //     newPalette.push(getRandomColor());
    //   }
    //   setPalette(newPalette);
    // }

    return (
        <>
        <p>Demo 1</p>
        {/* <div>
      {/* <button onClick={generatePalette}>Generate Palette</button> /}
      <div style={{ display: 'flex' }}>
        {palette.map((color, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </div> */}
        </>
    )
} 
