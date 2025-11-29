# AI-Powered Loan Processing Platform

A comprehensive landing page for the loan automation platform built for AI500 Hackathon Stage 1.

## Features

- **Hero Section**: Clear value proposition and key benefits
- **Problem & Solution**: Detailed problem statement and solution overview
- **How It Works**: End-to-end workflow visualization
- **Roadmap**: 4-phase plan from idea to launch
- **Execution Plan**: Technical stack and step-by-step implementation
- **Team**: Team member profiles and expertise
- **Why Our Team**: Reasons why the team can solve this problem
- **Call to Action**: Next steps and contact information

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

### Update Team Information

Edit `src/components/Team.tsx` and replace placeholder team member data with actual information:

- Names and roles
- Skills and AI tools
- GitHub, LinkedIn, and portfolio links

### Update Contact Information

Edit `src/components/CallToAction.tsx` to update:
- Email addresses
- Social media links
- Technical blueprint download link

### Update Technical Details

Edit `src/components/ExecutionPlan.tsx` to customize:
- Technical stack
- Implementation phases
- Specific technologies used

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Build the project: `npm run build`
2. Follow GitHub Pages deployment guide for Vite projects

## Project Structure

```
web-for-hack/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Roadmap.tsx
│   │   ├── ExecutionPlan.tsx
│   │   ├── Team.tsx
│   │   ├── WhyOurTeam.tsx
│   │   └── CallToAction.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## License

Built for AI500 Hackathon

