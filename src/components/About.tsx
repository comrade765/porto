import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-8 overflow-hidden border-t border-[#a100f2]/30"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #16213e 50%, #1a1a2e 100%)',
      }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="mb-12 flex items-baseline gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold font-sans"
            style={{
              background: 'linear-gradient(135deg, #00f5ff, #a100f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About
          </h2>
          <div
            className="h-0.5 flex-grow bg-gradient-to-r max-w-xs"
            style={{
              background: 'linear-gradient(90deg, #00d4ff, #a100f2, transparent)',
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
            }}
          />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left: Bio Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              I'm a Information Technology student at MMMUT (2025-2029) passionate about building 
              fast, scalable web experiences. With expertise in React, Tailwind CSS, and systems 
              programming (Java, C/C++), I focus on turning complex problems into elegant solutions.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              My approach is direct: concise code, precise implementations, concentrated on impact. 
              I believe the best software solves real problems with minimal complexity.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              When I'm not coding, you'll find me exploring system design patterns, contributing 
              to open-source, or crafting developer tools. Every project is an opportunity to push 
              boundaries.
            </p>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 gap-8 mt-8">
              {[
                { label: 'Projects Built', value: '15+' },
                { label: 'Languages', value: '6' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="space-y-2"
                  style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(161, 0, 242, 0.1))',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: '0.5rem',
                  }}
                >
                  <div
                    className="text-3xl font-bold font-mono"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff, #a100f2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <ImagePlaceholder
              width="100%"
              height="400px"
              label="Add Feature Image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
