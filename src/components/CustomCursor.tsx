import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isMoving) setIsMoving(true);
    };

    const handleMouseLeave = () => setIsMoving(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMoving]);

  if (!isMoving) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed w-8 h-8 border border-[#3a3a3a] rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed w-2 h-2 bg-[#888888] rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 28 }}
      />
    </>
  );
};
