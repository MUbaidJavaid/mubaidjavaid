/**
 * QUICK START GUIDE
 * 
 * Instructions for using the implemented architectural components
 */

# Quick Start Guide - Portfolio Architecture

## 🚀 Getting Started

### 1. Update Portfolio Configuration

**File**: `lib/portfolio.config.ts`

Update with your personal information:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your-email@example.com",
    // ... rest of config
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    // ... more social links
  ],
  // ... rest of portfolio config
}
```

### 2. Using the Background Component

The GPU-accelerated gradient background is already in place:

```typescript
// In your root layout or page
import ParticleBackground from '@/components/particle-background'

export default function Page() {
  return (
    <>
      <ParticleBackground />
      {/* Your content here */}
    </>
  )
}
```

### 3. Using the Tilt Card Component

For interactive project cards with 3D effect:

```typescript
import { TiltCard } from '@/components/tilt-card'

export function ProjectCard() {
  return (
    <TiltCard className="w-full max-w-md h-96 rounded-2xl bg-card p-6">
      <h3>Project Title</h3>
      <p>Project Description</p>
    </TiltCard>
  )
}
```

**Props**:
- `children`: React nodes to display
- `className`: Tailwind classes
- `rotationMultiplier`: Adjust rotation intensity (default: 1)
- `scale`: Hover scale effect (default: 1.05)

### 4. Using Scroll-Triggered Animations

For animations that trigger on scroll:

```typescript
import { ScrollTrigger, StaggeredList } from '@/components/scroll-trigger'

// Single element
<ScrollTrigger 
  animationType="fadeUp"
  delay={0.2}
  duration={0.8}
>
  <h2>My Awesome Section</h2>
</ScrollTrigger>

// List of items
<StaggeredList 
  staggerDelay={0.1}
  duration={0.6}
>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</StaggeredList>
```

**Animation Types**:
- `fadeUp`: Fade in + move up
- `fadeIn`: Just fade in
- `slideLeft`: Slide from right
- `slideRight`: Slide from left
- `scaleIn`: Scale from small

### 5. Using the Contact Form

Integrate the contact form in your contact section:

```typescript
import { ContactForm } from '@/components/contact-form'

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <h2>Get in Touch</h2>
      <ContactForm />
    </section>
  )
}
```

**Features**:
- ✅ Form validation
- ✅ Error messages
- ✅ Success feedback
- ✅ Loading state
- ✅ Accessibility attributes
- ✅ Server-side validation

### 6. Accessing Projects Data

Fetch projects from the API:

```typescript
// In a Server Component
async function ProjectsSection() {
  const response = await fetch('http://localhost:3000/api/projects?featured=true')
  const result = await response.json()
  const projects = result.data

  return (
    <section className="grid grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}
```

### 7. Respecting Motion Preferences

In your components, use the motion preference hook:

```typescript
import { useMotionPreference } from '@/hooks/use-motion-preference'

export function AnimatedComponent() {
  const { prefersReducedMotion } = useMotionPreference()

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : {
        x: [0, 50, 0],
        y: [0, 50, 0]
      }}
    >
      Content
    </motion.div>
  )
}
```

## 🔧 Setting Up Contact Form

### Step 1: Enable Email Service (Optional)

Update `app/api/contact/route.ts`:

```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// In the POST handler:
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.CONTACT_EMAIL,
  subject: `New contact: ${body.subject}`,
  html: `<p>From: ${body.email}</p><p>${body.message}</p>`
})
```

### Step 2: Enable Database Persistence (Optional)

Integrate with MongoDB:

```typescript
import { connectDB, ContactMessage } from '@/lib/db'

// In the POST handler:
await connectDB()
await ContactMessage.create({
  name: body.name,
  email: body.email,
  subject: body.subject,
  message: body.message,
  status: 'new'
})
```

## 📊 Utility Functions

### Text Processing

```typescript
import { 
  truncateText,
  formatDate,
  generateSlug,
  isValidEmail
} from '@/lib/utils'

// Examples
const slug = generateSlug("My Awesome Project")
// → "my-awesome-project"

const short = truncateText("Long text", 20)
// → "Long text..."

const formatted = formatDate(new Date())
// → "January 15, 2024"

const valid = isValidEmail("test@example.com")
// → true
```

### Array Utilities

```typescript
import {
  getFeaturedProjects,
  filterProjectsByTech,
  sortProjectsByDate,
  groupSkillsByCategory
} from '@/lib/utils'

// Get featured projects
const featured = getFeaturedProjects(allProjects)

// Filter by technology
const reactProjects = filterProjectsByTech(allProjects, 'React')

// Sort by date
const sorted = sortProjectsByDate(allProjects)

// Group skills
const grouped = groupSkillsByCategory(skillsArray)
```

### Performance Utilities

```typescript
import { debounce, throttle, mapRange, clamp } from '@/lib/utils'

// Debounce search
const debouncedSearch = debounce((query) => {
  // Search logic
}, 300)

// Throttle scroll events
const throttledScroll = throttle(() => {
  // Scroll handler
}, 100)

// Range mapping (for animations)
const rotationAngle = mapRange(
  mouseX,
  0, // minIn
  window.innerWidth, // maxIn
  -45, // minOut
  45 // maxOut
)
```

## 🎨 Customizing Colors

### Update Gradient Orbs Colors

Edit `components/particle-background.tsx`:

```typescript
// In the CSS injection effect:
const colors = theme === "dark"
  ? {
      primary: "6366f1",    // Change these hex values
      secondary: "8b5cf6",
      tertiary: "a855f7",
      quaternary: "ec4899"
    }
  : { /* light mode colors */ }
```

### Update Tailwind Theme

Edit `tailwind.config.ts`:

```typescript
theme: {
  colors: {
    primary: {
      50: '#f5f3ff',
      500: '#6366f1',  // Indigo
      900: '#3730a3',
      // ... more shades
    }
  }
}
```

## 🚨 Common Issues & Solutions

### Issue: Animations Not Working

**Solution**: Check if `prefers-reduced-motion` is enabled:

```typescript
// Debug in browser console:
window.matchMedia('(prefers-reduced-motion: reduce)').matches
// Should be false for animations to work
```

### Issue: Contact Form Not Submitting

**Solution**: Check CORS and environment variables:

```typescript
// Verify API endpoint is correct
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
  // ...
})
```

### Issue: Types Not Recognized

**Solution**: Rebuild TypeScript cache:

```bash
rm -rf .next
pnpm build
```

## 📚 File Reference

```
Key Files to Understand:

1. lib/portfolio.config.ts
   └─ Centralized portfolio configuration

2. lib/types.ts
   └─ Type definitions (Project, Skill, etc.)

3. components/particle-background.tsx
   └─ GPU-accelerated gradient orbs

4. components/tilt-card.tsx
   └─ 3D hover tilt effect

5. components/scroll-trigger.tsx
   └─ Scroll-triggered animations

6. components/contact-form.tsx
   └─ Validated contact form

7. app/api/contact/route.ts
   └─ Contact form API endpoint

8. app/api/projects/route.ts
   └─ Projects data API endpoint

9. hooks/use-motion-preference.ts
   └─ Motion accessibility hook

10. ARCHITECTURE.md
    └─ Complete architectural documentation
```

## 🔗 Integration Checklist

- [ ] Update `portfolio.config.ts` with your info
- [ ] Add your projects to portfolio config or connect MERN backend
- [ ] Set up email service for contact form (optional)
- [ ] Configure MongoDB for contact persistence (optional)
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Update social media links
- [ ] Test contact form submission
- [ ] Verify animations respect motion preferences
- [ ] Build and test for production
- [ ] Deploy to Vercel or hosting provider

## 🎯 Next Steps

1. **Complete Content**: Fill in projects, skills, and social links
2. **Connect Backend**: Integrate with your Express/MongoDB backend
3. **Customize Theme**: Update colors and typography
4. **Add More Sections**: Hero, About, Skills, Projects, Contact
5. **Deploy**: Push to production on Vercel
6. **Monitor**: Set up analytics and error tracking

---

**Need Help?** Check `ARCHITECTURE.md` for detailed information.
