

import React, { useEffect, useState } from 'react'; 

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubble = () => {
      const size = Math.random() * 50 + 20; // Random size between 10px and 60px
      const left = Math.random() * 100; // Random left position between 0% and 100%
      const top = Math.random() * 100; // Random top position between 0% and 100%
      const endX = Math.random() * 200 - 100 + 'vw'; // Random horizontal movement
      const endY = Math.random() * 200 - 100 + 'vh'; // Random vertical movement
      const duration = Math.random() * 20 + 10; // Random duration between 10s and 30s

      const newBubble = {
        id: Date.now(),
        size,
        left,
        top,
        endX,
        endY,
        duration,
      };

      setBubbles(prevBubbles => [...prevBubbles, newBubble]);

      setTimeout(() => {
        setBubbles(prevBubbles => prevBubbles.filter(bubble => bubble.id !== newBubble.id));
      }, (duration + 1) * 2000); // Remove bubble after its animation duration
    };

    const interval = setInterval(generateBubble, 1000); // Generate a new bubble every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute bg-gradient-to-r from-purple-500 via-blue-400 to-transparent rounded-full opacity-70 animate-moveBubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            '--bubble-end-x': bubble.endX,
            '--bubble-end-y': bubble.endY,
            animationDuration: `${bubble.duration}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default Bubbles;
