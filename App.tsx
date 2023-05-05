import React, { useState, useEffect } from 'react';
import './App.less';

const App: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + 10,
        y: prev.y + 5
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <img
        className="spiderman"
        src="https://i.imgur.com/hEXY8G4.png"
        alt="Spiderman"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
};

export default App;
