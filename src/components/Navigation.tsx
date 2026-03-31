import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-[#0f0f1e]/95 via-[#1a1a2e]/95 to-[#0f3460]/95 border-b border-gradient"
      style={{
        borderImage: 'linear-gradient(90deg, #00d4ff, #a100f2, #ff006e) 1',
        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold font-mono tracking-tighter"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #a100f2, #ff006e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          }}
          whileHover={{ scale: 1.1 }}
          animate={{
            textShadow: [
              '0 0 20px rgba(0, 212, 255, 0.5)',
              '0 0 30px rgba(161, 0, 242, 0.8)',
              '0 0 20px rgba(0, 212, 255, 0.5)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          AS
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm tracking-wide relative font-medium transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className={`${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#00d4ff] to-[#a100f2] bg-clip-text text-transparent'
                    : 'text-gray-300 group-hover:text-white'
                }`}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#a100f2]"
                  style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border-b border-[#00d4ff]/30"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-gray-300 hover:text-white text-sm tracking-wide transition-colors"
              whileHover={{ x: 8 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
