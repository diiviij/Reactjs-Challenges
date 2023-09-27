import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const gridRowCount = 5;
  const gridColumnCount = 5;

  const handleArrowDrag = (event, direction) => {
    // Handle logic for dragging arrows in the logic panel
    // You can update the logic based on your requirements
  };

  const handlePlayClick = () => {
    // Handle logic for executing the directions in sequential order
    // You can update the logic based on your requirements
  };

  const handleResetClick = () => {
    setRobotPosition({ x: 0, y: 0 });
    // Handle logic for resetting the robot's position and directions
    // You can update the logic based on your requirements
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Robotics Education Platform</h1>
      </header>
      <div className="content">
        <div className="grid">
          {Array.from({ length: gridRowCount }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {Array.from({ length: gridColumnCount }).map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`grid-cell ${
                    rowIndex === robotPosition.y && colIndex === robotPosition.x
                      ? 'robot-cell'
                      : ''
                  }`}
                >
                  {rowIndex === gridRowCount - 1 && colIndex === gridColumnCount - 1 && (
                    <div className="end-cell" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="logic-panel">
          <div className="arrow-button" draggable onDragStart={(event) => handleArrowDrag(event, 'up')}>
            &#8593;
          </div>
          <div className="arrow-button" draggable onDragStart={(event) => handleArrowDrag(event, 'down')}>
            &#8595;
          </div>
          <div className="arrow-button" draggable onDragStart={(event) => handleArrowDrag(event, 'left')}>
            &#8592;
          </div>
          <div className="arrow-button" draggable onDragStart={(event) => handleArrowDrag(event, 'right')}>
            &#8594;
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="play-button" onClick={handlePlayClick}>
          Play
        </button>
        <button className="reset-button" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
