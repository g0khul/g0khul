# g0khul Portfolio Project - Context & Progress

## Project Overview

Developer portfolio website to showcase backend skills and land a full-time, high-paying job.
Inspired by Lynn Fisher's portfolio at https://lynnandtonic.com/

## Goals

- Get full-time high-paying developer job
- Showcase backend skills (primary) and frontend skills (secondary)
- Projects will be built and added later
- Professional but creative presentation

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Routing**: React Router DOM v7
- **Icons**: react-icons (SlGhost, FaGhost)
- **Package Manager**: npm

## Design System

### Color Palette

**Dark Mode (Default):**

- Background: `#42005a` (purple)
- Text: `#3df3c2` (teal)
- Primary: `#3df3c2` (teal)

**Light Mode:**

- Background: `#cef565` (lime)
- Text: `#4000f5` (blue)
- Primary: `#4000f5` (blue)

### Design Philosophy

- Minimal, clean design inspired by Lynn Fisher
- Global border frame around entire page (2px solid currentColor)
- Max-width container: `max-w-7xl` (centered with mx-auto)
- Responsive padding: `clamp(0.5rem, 3vw, 2rem)`
- Tailwind CSS for all styling (no custom CSS classes)
- Only CSS variables for theme colors and global body styles
- Apple-like smooth transitions throughout

### Typography

- Font: System font stack (system-ui, -apple-system, Segoe UI, Roboto, etc.)
- Readable, clean fonts
- Lowercase navigation links
- Uppercase hero text

## Project Structure

```
src/
├── config/
│   ├── routes.ts            # Route definitions & navRoutes
│   └── animations.ts        # Framer Motion animation configs
├── components/
│   ├── layout/
│   │   ├── Layout.tsx       # Main layout wrapper with Tailwind
│   │   ├── Navigation.tsx   # Header with nav + hamburger menu
│   │   └── Footer.tsx       # Social links + contact button
│   └── ui/
│       ├── ThemeToggle.tsx  # Ghost icon theme toggle
│       ├── icons/           # Custom SVG icon components
│       ├── ContactForm.tsx  # Contact form (placeholder)
│       └── ProjectCard.tsx  # Project display card
├── pages/
│   ├── Home.tsx             # Hero section with name + tagline
│   ├── About.tsx            # Bio, timeline, experience (pending)
│   ├── Work.tsx             # Projects showcase (with dummy data)
│   ├── Contact.tsx          # Contact form page (pending)
│   └── Thoughts.tsx         # Blog via Substack API (pending)
├── contexts/
│   └── ThemeContext.tsx     # Theme state + localStorage
├── hooks/
│   ├── useTheme.ts          # Theme hook
│   └── useSubstack.ts       # Substack API hook (pending)
├── types/
│   ├── index.ts             # Shared types
│   └── substack.ts          # Substack types
├── data/
│   ├── projects.ts          # Project data (3 dummy projects)
│   ├── experience.ts        # Professional timeline
│   └── social.ts            # Social links
└── App.tsx                  # Clean, minimal - uses Layout + AnimatedRoutes
```

## Config Files

### routes.ts
- `routes` - All page routes (home, about, work, thoughts, contact)
- `navRoutes` - Header navigation only (about, work, thoughts - NO contact)
- `RouteConfig` interface with path, label, component

### animations.ts
- `appleEase` - Apple's cubic bezier: `[0.4, 0, 0.2, 1]`
- `pageVariants` - Page transition animations (fade + slide)
- `pageTransition` - 0.5s duration with appleEase
- `hoverAnimation` - Scale 1.5 + rotate -10°
- `tapAnimation` - Scale 0.95
- `itemTransition` - 0.3s duration for interactive elements
- `menuAnimation` - Mobile menu height animation
- `menuItemAnimation` - Stagger animation for menu items

## Pages & Features

### ✅ Completed

#### Home Page

- Large hero text: "GOKHUL"
- Tagline: "server-side brain, client-side clarity"
- Clean, centered layout
- Animated page transitions

#### Navigation

- Logo: "gokhul" (links to home) - with hover/tap animation
- Links: about, work, thoughts (lowercase) - contact removed
- Ghost icon theme toggle (FaGhost filled for dark, SlGhost outline for light)
- Ghost rotates 180° when switching themes
- Mobile hamburger menu with smooth animations
- Hamburger transforms to X on open
- Menu items stagger in from left
- All links have hover/tap scale + tilt effect

#### Footer

- Two sections: "reach out" and "connect"
- Reach out: Email, Signal
- Connect: Twitter, GitHub, LinkedIn, Discord
- "Get in touch" button → contact page
- All items have hover/tap scale + tilt animations

#### Theme System

- Default: Dark mode
- Persists in localStorage
- Toggles between dark (purple/teal) and light (lime/blue)
- Uses CSS custom properties
- Body class changes: `dark` or `light`
- Ghost icons change with theme

#### Layout & Responsiveness

- Layout component wraps Navigation + main + Footer
- Max-width: `max-w-7xl` centered
- Mobile hamburger menu (hidden on md+)
- Desktop nav links (hidden on mobile)
- Footer stacks on mobile, horizontal on desktop

#### Animations

- Apple-like smooth transitions (0.3-0.5s with cubic-bezier)
- Page transitions: fade + slide (y: 20px → 0 → -20px)
- Hover effects: scale 1.5 + rotate -10° + tilt
- Tap effects: scale 0.95
- Mobile menu: height animation + staggered items
- Hamburger icon transforms to X

### 🚧 Pending

1. **About Page**
   - Bio/introduction
   - Professional timeline (chronological, creative presentation)
   - Experience section

2. **Work/Projects Page**
   - Currently has 3 dummy projects
   - Design with: image/gif, title, description, stack, code link, live demo

3. **Contact Page**
   - Contact form (separate page)
   - Form fields: name, email, message

4. **Thoughts/Blog Page**
   - Integration with Substack API
   - Display posts, click → redirect to Substack

## Important Implementation Details

### Layout Component

```tsx
<div className="min-h-[calc(100vh-2rem)] flex flex-col border-2 border-current m-4 p-[clamp(0.5rem,3vw,2rem)]">
  <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">
    <Navigation />
    <main className="flex-1 p-0">{children}</main>
    <Footer />
  </div>
</div>
```

### Animation Pattern

For interactive elements, use Framer Motion:
```tsx
<motion.div
  whileHover={hoverAnimation}
  whileTap={tapAnimation}
  transition={itemTransition}
>
  <Link>...</Link>
</motion.div>
```

**Important**: Don't mix Tailwind CSS transitions with Framer Motion on the same element - they conflict!

### Styling Approach

- **Use Tailwind classes everywhere**
- No custom CSS classes (except for theme body styles)
- Only CSS in `index.css`: theme colors + body styles
- Import animations from `config/animations.ts`
- Import routes from `config/routes.ts`

### Data Structure

**RouteConfig:**
- path, label, component

**Project:**
- id, title, description, image, stack[], codeLink, liveLink

**SocialLink:**
- platform, url, type ('reach' | 'connect')

**Experience:**
- id, title, company, period, description, current?

### Social Links to Update

Currently placeholders:
- Email: your.email@example.com
- Twitter: /yourusername
- Signal: +1234567890
- LinkedIn: /in/yourusername
- GitHub: /yourusername
- Discord: /users/youruserid

## Next Steps

1. Build About page with bio and timeline
2. Build Work/Projects page with project cards
3. Build Contact page with form
4. Implement Substack integration for Thoughts
5. Replace dummy data with real content
6. Update social links with real URLs

## Key Decisions Made

- Dark mode as default
- Tailwind CSS v4 (uses `@theme` instead of config file)
- Ghost icons for theme toggle (not text)
- No emojis unless requested
- Lowercase navigation links
- Contact NOT in header nav (only in footer)
- Global border frame (not individual component borders)
- Max-width 7xl container
- Apple-like smooth animations
- Config files for routes and animations (DRY)
- Layout component for wrapper styles

## Installation Notes

Required packages installed:
- react-router-dom
- framer-motion
- tailwindcss v4
- @tailwindcss/vite
- autoprefixer
- postcss
- react-icons

## User Preferences

- Minimal color palette
- Creative/unique design approach
- Conventional layout structure (except home page)
- Use Tailwind wherever possible
- rem units, not px
- Responsive design patterns (clamp, vw, etc.)
- Smooth Apple-like animations
- DRY code organization (config files)
