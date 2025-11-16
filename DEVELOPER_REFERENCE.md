/**
 * DEVELOPER REFERENCE CARD
 * Quick command reference and common patterns
 */

# Developer Reference Card

## 🎯 Component Quick Reference

### ParticleBackground
```tsx
import ParticleBackground from '@/components/particle-background'

// Usage
<ParticleBackground />

// Props: None (auto-detects theme)
// Features: Auto-theme detection, reduced motion support
```

### TiltCard
```tsx
import { TiltCard } from '@/components/tilt-card'

// Usage
<TiltCard 
  className="w-full max-w-md h-96 rounded-2xl"
  rotationMultiplier={1}
  scale={1.05}
>
  <YourContent />
</TiltCard>
```

### ScrollTrigger
```tsx
import { ScrollTrigger } from '@/components/scroll-trigger'

// Usage
<ScrollTrigger 
  animationType="fadeUp"
  delay={0.2}
  duration={0.6}
>
  Content
</ScrollTrigger>

// Animation types: fadeUp | fadeIn | slideLeft | slideRight | scaleIn
```

### StaggeredList
```tsx
import { StaggeredList } from '@/components/scroll-trigger'

// Usage
<StaggeredList staggerDelay={0.1} duration={0.5}>
  <li>Item 1</li>
  <li>Item 2</li>
</StaggeredList>
```

### ContactForm
```tsx
import { ContactForm } from '@/components/contact-form'

// Usage
<ContactForm />

// Handles: validation, submission, error messages, accessibility
```

---

## 📚 Utility Functions Quick Reference

### String Utilities
```typescript
import { truncateText, formatDate, generateSlug, isValidEmail } from '@/lib/utils'

truncateText("Long text", 20)        // "Long text..."
formatDate(new Date())                // "January 15, 2024"
generateSlug("My Awesome Project")   // "my-awesome-project"
isValidEmail("test@example.com")     // true
```

### Array Utilities
```typescript
import { 
  getFeaturedProjects,
  filterProjectsByTech,
  sortProjectsByDate,
  groupSkillsByCategory
} from '@/lib/utils'

getFeaturedProjects(projects)
filterProjectsByTech(projects, 'React')
sortProjectsByDate(projects)
groupSkillsByCategory(skills)
```

### Performance Utilities
```typescript
import { debounce, throttle, mapRange, clamp } from '@/lib/utils'

const debouncedFn = debounce(fn, 300)
const throttledFn = throttle(fn, 100)
const angle = mapRange(x, 0, 100, -45, 45)
const bounded = clamp(value, -10, 10)
```

---

## 🪝 Hooks Quick Reference

### useMotionPreference
```typescript
import { useMotionPreference } from '@/hooks/use-motion-preference'

const { prefersReducedMotion } = useMotionPreference()

// Usage in components
animate={prefersReducedMotion ? {} : { x: [0, 50, 0] }}
```

---

## 🔌 API Routes Reference

### POST /api/contact
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "Great portfolio!"
  }'
```

**Response**:
```json
{
  "success": true,
  "data": { "messageId": "msg_123456" },
  "timestamp": "2024-11-14T10:00:00Z"
}
```

### GET /api/download-resume
```bash
curl http://localhost:3000/api/download-resume \
  -o resume.pdf
```

### GET /api/projects
```bash
# All projects
curl http://localhost:3000/api/projects

# Featured only
curl "http://localhost:3000/api/projects?featured=true"

# By category
curl "http://localhost:3000/api/projects?category=fullstack"

# Limited results
curl "http://localhost:3000/api/projects?limit=5"
```

---

## 🎨 Tailwind Classes Used

### Animation Classes
```css
/* From tailwindcss-animate */
animate-fadeIn
animate-slideIn
animate-scaleIn
animate-spin
animate-pulse
```

### Backdrop Classes
```css
backdrop-blur
backdrop-brightness
backdrop-contrast
```

### Blend Modes
```css
mix-blend-normal
mix-blend-multiply
mix-blend-screen
mix-blend-overlay
```

---

## 🔧 Configuration References

### portfolio.config.ts Structure
```typescript
{
  personal: {
    name: string
    title: string
    subtitle: string
    email: string
    location: string
    avatar: string
    bio: string
  }
  social: Array<{ name, url, icon }>
  skills: {
    frontend: Skill[]
    backend: Skill[]
    tools: Skill[]
  }
  navigation: Array<{ label, href }>
  seo: {
    title: string
    description: string
    keywords: string[]
    author: string
    ogImage: string
  }
  motion: {
    enableReducedMotion: boolean
    animationDuration: { fast, normal, slow }
  }
}
```

### Project Type Structure
```typescript
interface Project {
  id: string
  title: string
  description: string
  shortDescription?: string
  stack: string[]
  imageUrls: string[]
  link?: string
  github?: string
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
  category?: 'web' | 'mobile' | 'fullstack' | 'tool'
  metrics?: {
    performance?: string
    users?: string
    downloads?: string
  }
}
```

---

## 🚀 Common Commands

### Development
```bash
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
```

### Type Checking
```bash
pnpm tsc --noEmit     # Check TypeScript
```

### Database
```bash
# MongoDB Atlas (cloud)
# Set MONGODB_URI in .env.local

# Local MongoDB
mongod                # Start MongoDB
mongo                 # Connect to shell
```

---

## 🎯 Animation Patterns

### Fade In on Scroll
```tsx
<ScrollTrigger animationType="fadeIn">
  <div>Content</div>
</ScrollTrigger>
```

### Staggered List
```tsx
<StaggeredList>
  {items.map((item, i) => <li key={i}>{item}</li>)}
</StaggeredList>
```

### 3D Card Hover
```tsx
<TiltCard className="h-96 w-96">
  <ProjectCard />
</TiltCard>
```

### Combined Effects
```tsx
<ScrollTrigger animationType="slideLeft" delay={0.3}>
  <TiltCard scale={1.05}>
    <ProjectCard />
  </TiltCard>
</ScrollTrigger>
```

---

## 🔐 Security Checklist

- [ ] Validate all form input (server-side)
- [ ] Sanitize HTML content
- [ ] Use HTTPS in production
- [ ] Set secure HTTP headers
- [ ] Implement rate limiting
- [ ] Validate API request origins
- [ ] Hash sensitive data
- [ ] Use environment variables for secrets
- [ ] Implement CSRF protection
- [ ] Regular security audits

---

## 🚨 Debugging Tips

### Check Motion Preference
```javascript
// Browser console
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

### Inspect Animations
```javascript
// Chrome DevTools
// Animations panel shows all running animations
// Slow down for inspection: Settings → Speed
```

### Type Checking
```bash
pnpm tsc --noEmit --pretty
```

### API Testing
```bash
# Using curl
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"t@t.com","subject":"Hi","message":"Hello world!"}'
```

---

## 📊 Performance Metrics

### Target Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3.5s

### Optimization Techniques Used
- ✅ GPU-accelerated transforms only
- ✅ Server-side rendering (SSR)
- ✅ Code splitting
- ✅ Image optimization
- ✅ Font subsetting
- ✅ CSS purging

---

## 🎓 Learning Path

1. **Understand the Structure**
   - Read `ARCHITECTURE.md`
   - Review type definitions in `lib/types.ts`

2. **Explore Components**
   - Study `ParticleBackground` for CSS/motion
   - Study `TiltCard` for 3D effects
   - Study `ContactForm` for validation

3. **Implement Features**
   - Start with simple additions
   - Use the utility functions
   - Follow existing patterns

4. **Deploy**
   - Test locally thoroughly
   - Deploy to Vercel
   - Monitor with analytics

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Express.js](https://expressjs.com/)

---

## 📝 Common Snippets

### Fetch Data in Server Component
```tsx
async function getData() {
  const res = await fetch('http://localhost:3000/api/projects')
  const data = await res.json()
  return data.data
}

export default async function Page() {
  const projects = await getData()
  return <div>{/* render projects */}</div>
}
```

### Create Animated Section
```tsx
export function AnimatedSection() {
  return (
    <ScrollTrigger animationType="fadeUp" delay={0.2}>
      <section className="py-20">
        <h2 className="text-4xl font-bold">Section Title</h2>
        <p>Content here</p>
      </section>
    </ScrollTrigger>
  )
}
```

### Custom Animation
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.2,
    ease: "easeOut"
  }}
>
  Content
</motion.div>
```

---

**Quick Reference Version**: v1.0
**Last Updated**: November 14, 2025
**Status**: ✨ Complete
