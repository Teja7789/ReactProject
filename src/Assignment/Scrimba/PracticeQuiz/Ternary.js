// import React from 'react'
// import FirstDay from './Ternary/FirstDay'
// import ToogleApp from './ToggleTheme/ToogleApp'

// function Ternary() {
//   return (
//     <div>
//         {/* <FirstDay/> */}
//         {/* <ToogleApp/> */}
//     </div>
//   )
// }

// export default Ternary

import React, { useState, useEffect } from 'react';
import './ToggleTheme/ToogleApp.css'; // Create a CSS file to style the squares

const TOTAL_SQUARES = 10;


const Tenary = () => {
  const [squares, setSquares] = useState(Array(TOTAL_SQUARES).fill('black'));
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isWhite) {
      // Find the first black square and turn it white
      const index = squares.findIndex(square => square === 'black');
      if (index !== -1) {
        const updatedSquares = [...squares];
        updatedSquares[index] = 'white';
        setSquares(updatedSquares);
      }
    } else {
      // Turn all squares back to black
      setSquares(Array(TOTAL_SQUARES).fill('black'));
    }
  }, [isWhite]);

  return (
    <div className="square-container">
      {squares.map((color, index) => (
        <div key={index} className={`square ${color}`} />
      ))}
    </div>
  );
};

export default Tenary;
