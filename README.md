# Akash Kumar - Portfolio Website

A modern, interactive portfolio website showcasing my work as a AI Engineer from IIT Kharagpur.

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (Radix UI)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: TanStack Query

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and npm installed.

```bash
# Clone the repository
git clone https://github.com/akaashkr/akash-kumar.git

# Navigate to project directory
cd akash-kumar

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🌐 Deployment

This project can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn-ui components
│   ├── Navigation.tsx
│   ├── NavLink.tsx
│   └── ScrollIndicator.tsx
├── hooks/           # Custom React hooks
│   └── useFullPageScroll.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── PORs.tsx
│   ├── Achievements.tsx
│   ├── Resume.tsx
│   └── Contact.tsx
├── lib/             # Utility functions
│   └── utils.ts
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🎨 Customization

To customize this portfolio for your own use:

1. Update personal information in page components
2. Modify color scheme in `tailwind.config.ts`
3. Replace content in each page component
4. Update metadata in `index.html`

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Akash Kumar**
- IIT Kharagpur
- AI Engineer

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ By Akash Kumar.
