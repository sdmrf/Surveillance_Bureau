import { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(0); // Start key from 0 to avoid immediate reset

  const scrolling = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-150%)" },
    config: { duration: 8000 },
    reset: true,
    //reverse: key % 2 === 0, // Reverse the animation every other cycle
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div className="text-scroller">
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default TextScroller;
