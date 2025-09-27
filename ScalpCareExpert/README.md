# ScalpCare Expert - Professional Hair Health Consultation Website

A modern, responsive website for professional scalp and hair health consultations in Dubai.

## Features

- 🏥 **Professional Design** - Clean, medical-grade design optimized for trust
- 📱 **Mobile-First** - Fully responsive across all devices
- 💬 **WhatsApp Integration** - Direct WhatsApp contact with pre-filled messages
- 📋 **Lead Generation** - Contact forms and consultation booking
- ⚡ **Fast Performance** - Optimized for speed and Core Web Vitals
- 🔒 **Privacy Compliant** - GDPR-ready with cookie consent
- 📄 **Legal Pages** - Privacy Policy, Terms of Service, Medical Disclaimer

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Deployment**: Vercel

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Vercel Deployment

### Quick Deploy
1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `https://github.com/ddandanell/ScalpCare`
   - Vercel will automatically detect the configuration

2. **Build Settings** (should auto-detect):
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your site will be available at `https://your-project-name.vercel.app`

### Manual Configuration
If auto-detection fails, manually set:
- **Root Directory**: Leave empty (uses root)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Troubleshooting
- **404 Error**: Make sure the `vercel.json` file is in the root directory
- **Build Fails**: Check that all dependencies are in `package.json`
- **API Not Working**: Verify the `api/` directory contains the serverless functions

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── contact.ts         # Contact form handler
│   └── consultations/     # Consultation booking handlers
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML entry point
├── vercel.json            # Vercel configuration
├── package.json           # Root package.json
└── tailwind.config.js     # Tailwind CSS configuration
```

## Customization

### WhatsApp Integration
Update the phone number in `client/src/components/ChatWidget.tsx`:
```typescript
const phoneNumber = "+971501234567"; // Your WhatsApp number
```

### Styling
- Colors and themes: `client/src/index.css`
- Component styles: Individual component files
- Global config: `tailwind.config.js`

### Content
- Hero section: `client/src/components/HeroSection.tsx`
- About section: `client/src/components/AboutSection.tsx`
- Services: `client/src/components/ConsultationTypes.tsx`

## Performance Optimization

- ✅ Code splitting with Vite
- ✅ Image optimization
- ✅ CSS purging with Tailwind
- ✅ Lazy loading components
- ✅ Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For technical support or questions, please contact the development team.
