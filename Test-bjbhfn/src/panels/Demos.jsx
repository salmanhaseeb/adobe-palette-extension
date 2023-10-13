import React, { useState } from 'react';
import '../styles.css'
import { ColorPicker } from "../components/ColorPicker.jsx";
// import {App} from "../../../../random-palette-react-app/src/App.tsx"
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  export const Demos = () => {

    const [palette, setPalette] = useState([]);
    const [data, setData] = useState([]);
    const app = require('photoshop').app;
    const { LayerKind } = require('photoshop');
    // function addRectangle() {
      //   try {
    //     // Check if there is an active document
    //     if (!app.activeDocument) {
    //       alert('No active document in Adobe Photoshop.');
    //       return;
    //     }
    //     // Create a new art layer for the rectangle
    //     var rectangleLayer = app.activeDocument.createLayer();
    //     console.log('I m debug : ', rectangleLayer)
    //     rectangleLayer.name = 'Rectangle';
    
    //     // Define the rectangle's coordinates and dimensions
    //     var left = 100;     // Left edge position
    //     var top = 100;      // Top edge position
    //     var width = 200;    // Width of the rectangle
    //     var height = 100;   // Height of the rectangle
    
    //     // Create a path item for the rectangle shape
    //     var rectanglePath = app.activeDocument.pathItems.add();
    //     rectanglePath.closed = true;
    
    //     // Add path points to define the rectangle
    //     var topPoint = rectanglePath.pathPoints.add();
    //     topPoint.anchor = [left, top];
    //     topPoint.leftDirection = [left, top];
    //     topPoint.rightDirection = [left + width, top];
    
    //     var rightPoint = rectanglePath.pathPoints.add();
    //     rightPoint.anchor = [left + width, top];
    //     rightPoint.leftDirection = [left + width, top];
    //     rightPoint.rightDirection = [left + width, top + height];
    
    //     var bottomPoint = rectanglePath.pathPoints.add();
    //     bottomPoint.anchor = [left + width, top + height];
    //     bottomPoint.leftDirection = [left + width, top + height];
    //     bottomPoint.rightDirection = [left, top + height];
    
    //     var leftPoint = rectanglePath.pathPoints.add();
    //     leftPoint.anchor = [left, top + height];
    //     leftPoint.leftDirection = [left, top + height];
    //     leftPoint.rightDirection = [left, top];
    
    //     // Set the fill color (e.g., blue)
    //     var fillColor = new SolidColor();
    //     fillColor.rgb.red = 0;
    //     fillColor.rgb.green = 0;
    //     fillColor.rgb.blue = 255;
    //     rectangleLayer.fill = fillColor;
    
    //     // Optionally, you can further customize the rectangle, such as its stroke, opacity, and other properties.
    
    //     // Refresh the Photoshop document to see the changes
    //     app.activeDocument.refresh();
    //   } catch (e) {
    //     console.log(e)
    //     alert('An error occurred: ' + e);
    //   }
    // }
    
    // async function addBlueRectangle() {
    //   try {
    //     const currentDocument = app.activeDocument
    //     const layers = doc.activeLayers;
    //     const topLayer = layers[0]

    //     const rectangle = app.documents.add();
    //     rectangle.kind = LayerKind.SOLIDFILL;
    
    //     // Set the fill color to blue (RGB 0, 0, 255)
    //     const fillColor = new SolidColor();
    //     fillColor.rgb.red = 0;
    //     fillColor.rgb.green = 0;
    //     fillColor.rgb.blue = 255;
    //     rectangle.fill = fillColor;
    
    //     // Set the position and dimensions of the rectangle
    //     const top = 100; // Adjust the Y-coordinate as needed
    //     const left = 100; // Adjust the X-coordinate as needed
    //     const width = 200; // Adjust the width as needed
    //     const height = 100; // Adjust the height as needed
    
    //     rectangle.bounds = [left, top, left + width, top + height];
    
    //     // Refresh the Photoshop document to see the changes
    //     app.activeDocument.refresh();
    
    //     // Optionally, display a message to the user
    //     alert('Blue rectangle added to the document.');
    //   } catch (error) {
    //     console.error('An error occurred:', error);
    //   }
    // } 
  
    // // Function to generate a random color palette
    function generatePalette(event) {
    //  setData(event)
    console.log(app.activeDocument.layerTree)
    // addRectangle();

    // // Function to generate a random color palette
    // function generatePalette() {
      const newPalette = [];
      for (let i = 0; i < 5; i++) {
        newPalette.push(getRandomColor());
      }
      setPalette(newPalette);
    // }
    }

    return (
        <div>
        <p>Demo 2</p>
        <button
        onClick={generatePalette}
        >Generate Palette</button>
        <div className='palette'>
          {palette.length >=1 && palette.map((paletteItem,index)=>{
            return <div className='paletteSection' key={index}>
             <div style={{width: '40px', height: '40px', backgroundColor: `${paletteItem}`}}></div>
            </div>
          })}
        </div>
    </div>
       
    )
} 
