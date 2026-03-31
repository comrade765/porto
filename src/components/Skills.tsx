import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    },
    {
      name: 'Backend',
      skills: ['Java', 'C++', 'C', 'REST APIs', 'Node.js'],
    },
    {
      name: 'Tools & Platform',
      skills: ['Git', 'VS Code', 'Chrome DevTools', 'Linux', 'Vercel'],
    },
    {
      name: 'Specializations',
      skills: ['Component Architecture', 'Animation Systems', 'Performance', 'UI/UX'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-8 overflow-hidden border-t border-[#00d4ff]/30"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #16213e 50%, #0f0f1e 100%)',
      }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="mb-16 flex items-baseline gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold font-sans"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a100f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Skills & Stack
          </h2>
          <div
            className="h-0.5 flex-grow max-w-xs"
            style={{
              background: 'linear-gradient(90deg, #00d4ff, #a100f2, transparent)',
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
            }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              className="space-y-4"
              variants={categoryVariants}
            >
              {/* Category Name */}
              <h3
                className="text-lg font-mono uppercase tracking-wide border-b pb-3"
                style={{
                  color: '#00d4ff',
                  borderColor: 'rgba(0, 212, 255, 0.2)',
                  textShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
                }}
              >
                {category.name}
              </h3>

              {/* Skills Grid */}
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {category.skills.map((skill) => (
                  <motion.button
                    key={skill}
                    className="px-4 py-2 font-mono text-xs tracking-wide rounded relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(161, 0, 242, 0.1))',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      color: '#a0aec0',
                    }}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
                      borderColor: '#00d4ff',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4ff] 
                        to-transparent opacity-0 group-hover:opacity-30 translate-x-full 
                        group-hover:translate-x-0 transition-all duration-500"
                    />
                    <span className="relative">{skill}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
