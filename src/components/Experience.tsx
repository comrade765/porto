import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // TODO: REPLACE with actual experience
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'MMMUT',
      role: 'Information Technology Student',
      period: '2025 - 2029',
      description:
        'Pursuing B.Tech in Information Technology with focus on web development, algorithms, and systems programming.',
      achievements: [
        'Building full-stack web applications',
        'Contributing to open-source projects',
        'Mastering data structures and algorithms',
      ],
    },
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-b from-[#000000] to-[#0a0a0a] 
        border-t border-[#2a2a2a]"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="mb-16 flex items-baseline gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sans"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a100f2, #ff006e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.2))',
            }}
          >
            Experience
          </h2>
          <div className="h-0.5 flex-grow bg-gradient-to-r from-[#00d4ff] via-[#a100f2] to-transparent max-w-xs opacity-60" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative flex gap-6 md:gap-8"
              variants={itemVariants}
            >
              {/* Timeline Line and Dot */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <motion.div
                  className="w-4 h-4 border-2 rounded-full relative z-10 mt-1"
                  style={{
                    background: 'radial-gradient(circle, #00d4ff, #0088aa)',
                    borderColor: '#a100f2',
                    boxShadow: '0 0 15px rgba(0, 212, 255, 0.8)',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                />

                {/* Vertical Line (if not last) */}
                {idx < experiences.length - 1 && (
                  <motion.div
                    className="w-0.5 h-40 mt-2"
                    style={{
                      background: 'linear-gradient(to bottom, #00d4ff, #0096ff, #a100f2)',
                      boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
                    }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.2 }}
                  />
                )}
              </div>

              {/* Content */}
              <motion.div
                className="pb-8 pt-1 flex-1"
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #00d4ff, #a100f2)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono tracking-wide"
                      style={{
                        color: '#0096ff',
                        textShadow: '0 0 8px rgba(0, 150, 255, 0.4)',
                      }}
                    >
                      {exp.company} • {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#c0c0c0] leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && (
                    <motion.ul
                      className="space-y-2 mt-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                    >
                      {exp.achievements.map((achievement, aidx) => (
                        <motion.li
                          key={aidx}
                          className="flex gap-3 text-sm"
                          style={{
                            color: '#a0a0a0',
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.2 + 0.4 + aidx * 0.1,
                          }}
                        >
                          <span className="text-[#00d4ff] font-mono text-xs mt-1">→</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </div>

                {/* Card Background */}
                <motion.div
                  className="absolute -inset-4 border rounded -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'rgba(0, 212, 255, 0.05)',
                    borderColor: '#00d4ff',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.6,
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun fact or CTA */}
        <motion.div
          className="mt-12 p-6 border rounded space-y-3"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(255, 0, 110, 0.05))',
            borderColor: '#00d4ff',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ 
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
          }}
        >
          <p className="font-light"
            style={{
              color: '#d0d0d0',
            }}
          >
            💡 <span className="font-mono"
              style={{
                color: '#00d4ff',
                textShadow: '0 0 8px rgba(0, 212, 255, 0.6)',
              }}
            >Pro tip:</span> Looking at my GitHub 
            below to see my full project history and contributions. Happy to discuss any of them!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
