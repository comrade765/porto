import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // TODO: REPLACE with actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'A high-performance web application demonstrating advanced React patterns and state management. Focuses on user experience with smooth animations and responsive design.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/akarshitasingh2021-arch',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Systems-level project built with modern C++ showcasing efficient algorithms and clean architecture. Optimized for performance and scalability.',
      tech: ['C++', 'Algorithms', 'Data Structures'],
      github: 'https://github.com/akarshitasingh2021-arch',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Full-stack application integrating frontend and backend technologies. Features RESTful API design, database optimization, and sophisticated UI interactions.',
      tech: ['React', 'Java', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/akarshitasingh2021-arch',
      live: 'https://example.com',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = (e.clientX - rect.left - rect.width / 2) / 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-8 overflow-hidden border-t border-[#a100f2]/30"
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #16213e 25%, #0f0f1e 50%, #1a1a2e 100%)',
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
              background: 'linear-gradient(135deg, #00d4ff, #ff006e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Projects
          </h2>
          <div
            className="h-0.5 flex-grow max-w-xs"
            style={{
              background: 'linear-gradient(90deg, #ff006e, #a100f2, transparent)',
              boxShadow: '0 0 10px rgba(255, 0, 110, 0.5)',
            }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-[#0a0a0a] rounded-lg overflow-hidden"
              style={{
                border: '1px solid rgba(0, 212, 255, 0.2)',
                perspective: '1000px',
              }}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => {
                setHoveredId(null);
                handleMouseLeave();
              }}
              onMouseMove={handleMouseMove}
              animate={{
                rotateX: hoveredId === project.id ? tilt.x : 0,
                rotateY: hoveredId === project.id ? tilt.y : 0,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              whileHover={{
                borderColor: '#00d4ff',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(0, 212, 255, 0.1)',
              }}
            >
              {/* Image Section with Parallax */}
              <motion.div
                className="relative h-64 sm:h-80 overflow-hidden bg-[#111111]"
                animate={{
                  y: hoveredId === project.id ? -8 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(161, 0, 242, 0.1))',
                }}
              >
                <ImagePlaceholder
                  width="100%"
                  height="100%"
                  label="Add Project Screenshot"
                  className="h-full rounded-none"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div className="p-6 sm:p-8 space-y-4">
                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold font-sans"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #a100f2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{
                    scale: hoveredId === project.id ? 1.05 : 1,
                  }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0.7 }}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded uppercase tracking-wider"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(161, 0, 242, 0.1))',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        color: '#a0aec0',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex gap-4 pt-4"
                  style={{
                    borderTop: '1px solid rgba(0, 212, 255, 0.2)',
                  }}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0.6 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono transition-colors"
                      style={{
                        color: '#a0aec0',
                      }}
                      whileHover={{ x: 4, color: '#00d4ff' }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono transition-colors"
                      style={{
                        color: '#a0aec0',
                      }}
                      whileHover={{ x: 4, color: '#ff006e' }}
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/akarshitasingh2021-arch"
            // TODO: REPLACE with actual GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 font-mono text-sm tracking-wide rounded"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a100f2)',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
