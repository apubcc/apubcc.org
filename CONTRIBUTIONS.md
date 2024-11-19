# Contribution Guidelines

## Project Structure

### Components Organization

1. **Page Sections (`components/pages-sections/`):**
   - Components that represent major sections of specific pages
   - Named using PascalCase
   - Example: `Hero.tsx`, `VisionsMissions.tsx`

2. **UI Components (`components/ui/`):**
   - Reusable UI components used across the application
   - Named using kebab-case
   - Example: `button.tsx`

3. **Custom Components (`components/custom/`):**
   - Application-specific components that don't fit in other categories
   - Named using PascalCase
   - Example: `Navbar.tsx`

## Styling Guidelines

1. **Page Layouts:**
   - Page-specific layouts should live inside the respective `page.tsx` file
   - Use the `section` tag to wrap page sections
   - Example:
   ```tsx
   <section className="p-3">
     <Hero />
   </section>
   ```

2. **Component Styling:**
   - Component-specific styles must live within the component file itself
   - Use Tailwind CSS classes as the primary styling method
   - For complex components, use composition of Tailwind classes using the `cn()` utility
 

## Naming Conventions

1. **Files:**
   - React Components: PascalCase (`Hero.tsx`, `Navbar.tsx`)
   - Utility files: camelCase (`utils.ts`)
   - Configuration files: kebab-case (`tailwind.config.ts`)

2. **Components:**
   - Use PascalCase for component names
   - Name should clearly indicate the component's purpose
   - Example: `VisionsMissions`, `Hero`, `Navbar`

3. **Functions and Variables:**
   - Use camelCase
   - Be descriptive with naming
   - Example: `buttonVariants`, `handleSubmit`

## Best Practices

1. **Component Structure:**
   - Keep components focused and single-responsibility
   - Extract reusable logic into custom hooks
   - Place hooks in the `hooks/` directory

2. **Imports:**
   - Use absolute imports with `@/` prefix
   - Group imports by:
     1. React/Next.js imports
     2. Third-party libraries
     3. Internal components/utilities
     4. Types/interfaces

3. **TypeScript:**
   - Always use proper TypeScript types
   - Export interfaces and types when they might be reused
   - Use proper type annotations for props and state

## Development Workflow

1. **Starting Development:**
   ```bash
   npm install
   npm run dev
   ```

