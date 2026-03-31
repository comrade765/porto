import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const arrowVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%)',
        backgroundSize: '400% 400%',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #00d4ff, transparent)',
            top: '-10%',
            right: '-5%',
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #a100f2, transparent)',
            bottom: '-5%',
            left: '-10%',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="initial"
        animate="animate"
        variants={scrollVariants}
      >
        {/* Profile Photo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative w-32 h-32">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00d4ff, #a100f2, #ff006e, #00ff88, #00d4ff)',
                opacity: 0.8,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <img
              src="/akasrshita-profile.jpg"
              alt="Akarshita Singh"
              className="absolute inset-1 rounded-full object-cover w-full h-full"
              style={{
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(161, 0, 242, 0.3)',
              }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-4 font-sans tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #a100f2 50%, #ff006e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Akarshita Singh
        </motion.h1>

        {/* Tagline with glow */}
        <motion.div
          className="mb-6 h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-xl sm:text-2xl font-light tracking-wide"
            style={{
              color: '#a0aec0',
              textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
            }}
          >
            React • Tailwind • Java • C/C++
          </p>
        </motion.div>

        {/* Brand words */}
        <motion.div
          className="flex gap-4 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['CONCISE', 'PRECISE', 'CONCENTRATED'].map((word) => (
            <motion.span
              key={word}
              className="text-xs font-mono px-3 py-1 rounded tracking-wider"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(161, 0, 242, 0.1))',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                color: '#a0aec0',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)',
              }}
              whileHover={{
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons with enhanced styling */}

      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={arrowVariants}
        animate="animate"
      >
        <ChevronDown
          size={28}
          style={{
            color: '#00d4ff',
            filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.6))',
          }}
        />
      </motion.div>
    </section>
  );
};
