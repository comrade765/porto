import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  // TODO: REPLACE with actual contact info
  const contactInfo = {
    email: 'akarshitasingh07@gmail.com',
    github: 'https://github.com/akarshitasingh2021-arch',
    linkedin: 'https://www.linkedin.com/in/akarshita-singh-2307703a1?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  };

  const social = [
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${contactInfo.email}`,
      label: contactInfo.email,
    },
    {
      name: 'GitHub',
      icon: Github,
      url: contactInfo.github,
      label: 'github.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: contactInfo.linkedin,
      label: 'linkedin.com',
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
      id="contact"
      className="relative py-24 px-4 sm:px-8 overflow-hidden border-t border-[#ff006e]/30"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #16213e 50%, #0f0f1e 100%)',
      }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 font-sans"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #ff006e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let's Work Together
          </h2>
          <p
            className="text-lg font-light max-w-2xl mx-auto tracking-wide"
            style={{
              color: '#a0aec0',
              textShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
            }}
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have 
            a question or just want to say hello, feel free to reach out.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="group px-8 py-4 border border-[#00d4ff] border-opacity-40
              text-[#f5f5f5] font-mono text-sm tracking-wide rounded 
              flex items-center justify-center gap-3 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a100f2)',
              boxShadow: '0 0 25px rgba(0, 212, 255, 0.6), inset 0 0 15px rgba(0, 212, 255, 0.1)',
            }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 212, 255, 0.8), inset 0 0 20px rgba(0, 212, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            Send Email
            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 
              group-hover:translate-x-0 transition-all" />
          </motion.a>

          <motion.a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-[#ff006e] border-opacity-40
              text-[#f5f5f5] font-mono text-sm tracking-wide rounded 
              flex items-center justify-center gap-3 transition-all"
            style={{
              background: 'linear-gradient(135deg, #ff006e, #a100f2)',
              boxShadow: '0 0 25px rgba(255, 0, 110, 0.6), inset 0 0 15px rgba(255, 0, 110, 0.1)',
            }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(255, 0, 110, 0.8), inset 0 0 20px rgba(255, 0, 110, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            View GitHub
            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 
              group-hover:translate-x-0 transition-all" />
          </motion.a>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {social.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.url}
                target={item.name !== 'Email' ? '_blank' : undefined}
                rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group relative p-6 border border-opacity-30 rounded 
                  transition-all"
                style={{
                  borderColor: item.name === 'Email' ? '#00d4ff' : item.name === 'GitHub' ? '#ff006e' : '#0096ff',
                  background: 'rgba(15, 15, 30, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
                variants={itemVariants}
                onMouseEnter={() => setHoveredSocial(item.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: item.name === 'Email' 
                    ? '0 0 30px rgba(0, 212, 255, 0.5)' 
                    : item.name === 'GitHub'
                    ? '0 0 30px rgba(255, 0, 110, 0.5)'
                    : '0 0 30px rgba(0, 150, 255, 0.5)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded"
                      style={{
                        background: item.name === 'Email' 
                          ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(161, 0, 242, 0.2))'
                          : item.name === 'GitHub'
                          ? 'linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(161, 0, 242, 0.2))'
                          : 'linear-gradient(135deg, rgba(0, 150, 255, 0.2), rgba(0, 212, 255, 0.2))',
                        border: item.name === 'Email' 
                          ? '1px solid rgba(0, 212, 255, 0.4)'
                          : item.name === 'GitHub'
                          ? '1px solid rgba(255, 0, 110, 0.4)'
                          : '1px solid rgba(0, 150, 255, 0.4)',
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color: item.name === 'Email' 
                            ? '#00d4ff' 
                            : item.name === 'GitHub'
                            ? '#ff006e'
                            : '#0096ff',
                          filter: 'drop-shadow(0 0 6px currentColor)',
                        }}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                    {/* Glow background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded opacity-0 -z-10"
                      animate={{
                        scale: hoveredSocial === item.name ? 1.5 : 0,
                        opacity: hoveredSocial === item.name ? 0.15 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: item.name === 'Email' 
                          ? 'radial-gradient(circle, #00d4ff, transparent)'
                          : item.name === 'GitHub'
                          ? 'radial-gradient(circle, #ff006e, transparent)'
                          : 'radial-gradient(circle, #0096ff, transparent)',
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-mono uppercase tracking-wide"
                      style={{
                        color: item.name === 'Email' 
                          ? '#00d4ff' 
                          : item.name === 'GitHub'
                          ? '#ff006e'
                          : '#0096ff',
                        textShadow: item.name === 'Email'
                          ? '0 0 8px rgba(0, 212, 255, 0.6)'
                          : item.name === 'GitHub'
                          ? '0 0 8px rgba(255, 0, 110, 0.6)'
                          : '0 0 8px rgba(0, 150, 255, 0.6)',
                      }}
                    >
                      {item.name}
                    </p>
                    <p className="text-[#e0e0e0] font-light text-sm">{item.label}</p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute top-1/2 right-6 -translate-y-1/2"
                  animate={{
                    x: hoveredSocial === item.name ? 4 : 0,
                    opacity: hoveredSocial === item.name ? 1 : 0.5,
                  }}
                  style={{
                    color: item.name === 'Email' 
                      ? '#00d4ff' 
                      : item.name === 'GitHub'
                      ? '#ff006e'
                      : '#0096ff',
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="h-px opacity-40"
            style={{
              background: 'linear-gradient(to right, transparent, #00d4ff, #a100f2, #ff006e, transparent)',
            }}
          />

          <p className="text-[#a0a0a0] text-sm font-light tracking-wide"
            style={{
              color: '#b0b0b0',
              textShadow: '0 0 8px rgba(0, 212, 255, 0.2)',
            }}
          >
            Designed & built with precision. • © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
