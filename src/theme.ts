// THEME CONFIGURATION - Vivid Modern Gradient Palette
export const THEME = {
  bg: {
    primary: '#0f0f1e',
    secondary: '#1a1a2e',
    tertiary: '#16213e',
    surface: '#0f3460',
    hover: '#533483',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0aec0',
    tertiary: '#cbd5e0',
    muted: '#718096',
  },
  accent: {
    primary: '#00d4ff',    // Cyan
    secondary: '#ff006e',  // Hot Pink
    tertiary: '#00f5ff',   // Electric Cyan
    accent4: '#a100f2',    // Purple
    accent5: '#ff1493',    // Deep Pink
    accent6: '#00ff88',    // Neon Green
  },
  gradients: {
    primary: 'linear-gradient(135deg, #00d4ff 0%, #a100f2 100%)',
    secondary: 'linear-gradient(135deg, #ff006e 0%, #00d4ff 100%)',
    tertiary: 'linear-gradient(135deg, #a100f2 0%, #00ff88 100%)',
    accent: 'linear-gradient(135deg, #ff1493 0%, #00d4ff 100%)',
    glow: 'linear-gradient(135deg, #00f5ff 0%, #a100f2 50%, #ff006e 100%)',
  },
  neon: {
    cyan: '#00d4ff',
    pink: '#ff006e',
    purple: '#a100f2',
    green: '#00ff88',
    blue: '#0096ff',
  },
  font: {
    sans: 'Inter',
    mono: 'JetBrains Mono',
  },
};

export const ANIMATION = {
  transition: {
    fast: '0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
    normal: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    slow: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  stagger: {
    container: { staggerChildren: 0.08, delayChildren: 0.15 },
    item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  },
};
