# portfolio


A modern, interactive portfolio website built with Next.js, TypeScript, and Three.js, featuring stunning 3D visuals and smooth animations.

🌐 **Live Demo**: [https://portfolio-delta-pied-12.vercel.app](https://portfolio-delta-pied-12.vercel.app)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **3D Interactive Elements**: Powered by Three.js and React Three Fiber
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Terminal Component**: Interactive terminal interface using xterm.js
- **Syntax Highlighting**: Code display with react-syntax-highlighter
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Icons**: Beautiful icons from Lucide React
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Terminal**: xterm.js with fit addon
- **Icons**: Lucide React
- **Code Highlighting**: React Syntax Highlighter

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Fork this repository**
   ```bash
   # Click the "Fork" button on GitHub or clone directly
   git clone https://github.com/ammarhere02/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
portfolio/
├── components/          # Reusable React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles and Tailwind config
├── types/              # TypeScript type definitions
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🎨 Reusable Components

This portfolio includes several reusable components that you can easily extract and use in your own projects:

### 3D Components
- Interactive 3D scenes and models
- Camera controls and animations
- Lighting setups

### UI Components
- Modern card layouts
- Animated buttons and links
- Navigation components
- Terminal interface

### Animation Components
- Page transitions
- Scroll-triggered animations
- Hover effects and micro-interactions

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Personalizing the Portfolio

1. **Update personal information** in the main components
2. **Replace 3D models** in the Three.js scenes
3. **Modify color scheme** in Tailwind config
4. **Add your projects** and experiences
5. **Update contact information** and social links

### Using Components in Your Project

Each component is designed to be modular. To use them:

1. Copy the component files you need
2. Install the required dependencies from `package.json`
3. Import and use in your project
4. Customize styling and props as needed

## 📦 Key Dependencies

```json
{
  "next": "14.2.5",
  "react": "^18",
  "tailwindcss": "^3.4.1",
  "framer-motion": "^11.3.8",
  "@react-three/fiber": "^8.16.8",
  "@react-three/drei": "^9.108.3",
  "three": "^0.166.1",
  "xterm": "^5.3.0",
  "lucide-react": "^0.408.0"
}
```

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

For other platforms, run `npm run build` and deploy the `.next` folder.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Three.js](https://threejs.org/) for 3D graphics capabilities
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

