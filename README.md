# Akarshita Singh - Portfolio

A production-ready, visually elite personal portfolio built with **React 18**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Design Features

- **Brutalist-Minimal Aesthetic**: Pure black & grey color palette—no chromatic colors
- **Advanced Animations**: 
  - Parallax hover effects with perspective transforms
  - Scroll-triggered staggered animations
  - Ambient grain texture and grid patterns
  - Custom animated cursor with magnetic effects
- **Fully Responsive**: Mobile-first design with elegant breakpoints
- **Performance Optimized**: Smooth animations with Framer Motion, lazy-loaded components

## 🛠 Tech Stack

- **React 18** (functional components, hooks)
- **TypeScript** (strict mode for type safety)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (declarative animations)
- **Lucide React** (beautiful SVG icons)
- **Vite** (fast, modern build tool)

## 📦 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Fixed navbar with scroll tracking
│   ├── Hero.tsx                # Full-viewport hero section
│   ├── About.tsx               # Bio + feature image placeholder
│   ├── Skills.tsx              # Animated tech badges + proficiency
│   ├── Projects.tsx            # Project cards with parallax tilt
│   ├── Experience.tsx          # Animated timeline
│   ├── Contact.tsx             # Social links + CTA buttons
│   ├── ImagePlaceholder.tsx    # Reusable placeholder component
│   ├── CustomCursor.tsx        # Animated cursor ring
│   └── GrainEffect.tsx         # Ambient texture overlay
├── theme.ts                    # Centralized color & animation config
├── App.tsx                     # Main app component
├── main.tsx                    # React entry point
└── index.css                   # Global Tailwind styles
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output: `dist/`

## 📝 Personalization Guide

### Step 1: Update Contact Information
In each component, find `// TODO: REPLACE` comments:

**`Contact.tsx`**:
```tsx
const contactInfo = {
  email: 'your-email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
};
```

**`Navigation.tsx`** (logo):
```tsx
<motion.div className="...">AS</motion.div>  // Change to your initials
```

### Step 2: Add Projects
In `Projects.tsx`, update the `projects` array:

```tsx
{
  id: 1,
  title: 'Your Project Title',
  description: 'Project description highlighting impact & outcomes.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  github: 'https://github.com/username/repo',
  live: 'https://project-url.com',
}
```

### Step 3: Update Experience
In `Experience.tsx`, modify the `experiences` array:

```tsx
{
  id: 1,
  company: 'Company Name',
  role: 'Your Role',
  period: '2023 - Present',
  description: 'What you built or accomplished.',
  achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
}
```

### Step 4: Customize About Section
Edit `About.tsx` bio paragraphs to reflect your story.

### Step 5: Update Skills
In `Skills.tsx`, modify the `skillCategories` array:

```tsx
{
  name: 'Frontend',
  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
}
```

### Step 6: Add Profile Images
Replace placeholder components with real images:

```tsx
// In Hero.tsx
<img 
  src="/your-photo.jpg" 
  alt="Profile" 
  className="w-32 h-32 rounded-full object-cover"
/>
```

## 🎬 Animation Features

### 1. Parallax Hover Effects
- Cards tilt based on mouse position
- Inner elements shift at different depths
- Subtle glow follows cursor

### 2. Scroll-Triggered Animations
- Sections fade + slide up on viewport entry
- List items stagger in sequence
- Progress bars animate dynamically

### 3. Global Ambient Effects
- Grain texture overlay (animated noise)
- Grid pattern on hero
- Custom cursor with spring physics

## 🎨 Color System

```typescript
Primary Background:  #000000
Secondary:           #0a0a0a
Surface:             #111111 / #1a1a1a / #222222
Border:              #2a2a2a / #333333
Accent (Glow):       #3a3a3a
Text Primary:        #f5f5f5
Text Secondary:      #888888 / #666666
```

All colors defined in `theme.ts` for easy customization.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, adjusted spacing)
- **Tablet**: 768px - 1024px (stacked or 2-col layouts)
- **Desktop**: > 1024px (full grid layouts)

## ⚡ Performance Tips

1. **Image Optimization**: Export project images as WebP at ~600-1200px width
2. **Lazy Loading**: Images load on-demand with Framer Motion's `whileInView`
3. **Code Splitting**: Dynamic imports for large components (if needed)
4. **CSS**: Tailwind's tree-shaking removes unused styles in production

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy `dist/` folder
```

### GitHub Pages
```bash
npm run build
# Push `dist/` to `gh-pages` branch
```

### Netlify
```bash
# Connect GitHub repo, auto-deploys on push to main
```

## 📚 Key Libraries

| Library | Purpose |
|---------|---------|
| **React 18** | UI component framework |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Advanced animations |
| **Lucide React** | SVG icon library |
| **Vite** | Fast build tool & dev server |

## 🎯 Best Practices

✅ Keep copy concise & impact-driven  
✅ Use real project links (GitHub, live demos)  
✅ Optimize images for web  
✅ Test on mobile & tablet  
✅ Maintain consistent branding  
✅ Update projects & experience regularly  

## 📄 License

Feel free to use this template for your portfolio. Attribution appreciated but not required.

---

**Built with precision. Designed for impact.**

Questions? Open an issue or reach out via the contact section.
