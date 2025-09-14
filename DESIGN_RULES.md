# Design Rules - Aganeto Agency

## Core Principles
- Use Tailwind CSS + shadcn/ui only. No custom CSS unless absolutely necessary.
- All sections must support mobile-first responsive design.
- Minimum tap target size: 44px for all interactive elements.
- Maintain consistent spacing using Tailwind's spacing scale.

## Spacing Scale
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px) 
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)
- **5xl**: 8rem (128px)

## Border Radius
- **sm**: 8px (calc(var(--radius) - 8px))
- **md**: 12px (calc(var(--radius) - 4px))
- **lg**: 16px (var(--radius))
- **xl**: 20px (calc(var(--radius) + 4px))

## Shadows
- **sm**: shadow-sm (0 1px 2px 0 rgb(0 0 0 / 0.05))
- **md**: shadow-md (0 4px 6px -1px rgb(0 0 0 / 0.1))
- **lg**: shadow-lg (0 10px 15px -3px rgb(0 0 0 / 0.1))
- **xl**: shadow-xl (0 20px 25px -5px rgb(0 0 0 / 0.1))

## Max Widths
- **Container**: 1200px (2xl breakpoint)
- **Content**: 800px max for optimal reading
- **Narrow content**: 600px max

## Color Usage
- **Primary**: Use for main CTAs and key actions
- **Secondary**: Use for secondary actions and subtle highlights
- **Accent**: Use for special highlights and attention-grabbing elements
- **Muted**: Use for subtle text and backgrounds
- **Foreground**: Use for main text content

## Typography
- **Headlines**: Use font-semibold with tracking-tight
- **Body text**: Use leading-7 with 17px base size
- **Responsive**: Scale up on larger screens (md: breakpoint)

## Component Guidelines
- All buttons must use shadcn/ui Button component
- Use Container component for consistent max-width and padding
- Prefer composition over complex single components
- Use semantic HTML elements (header, main, section, footer)
- Include proper ARIA labels and accessibility attributes

## Mobile-First Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Animation Guidelines
- Use subtle, purposeful animations
- Prefer CSS transitions over JavaScript animations
- Keep animations under 300ms for UI interactions
- Use ease-out timing for most animations

## Image Guidelines
- Always use next/image for optimization
- Set proper width/height to prevent layout shift
- Use priority loading for above-the-fold images
- Include descriptive alt text for accessibility
