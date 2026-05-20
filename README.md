# Modern Developer Portfolio

A minimal, data-driven, and highly customizable Single Page Application (SPA) portfolio built with React, Vite, Tailwind CSS, and shadcn/ui. 

Designed with a sleek **Glassmorphism** and **Deep Blue Ocean** theme, this portfolio ensures a premium user experience across all devices, featuring seamless Light and Dark mode switching.

## ✨ Features

- **Data-Driven Architecture:** All portfolio content (Personal Info, Skills, Projects, Employment, Education) is centralized in a single configuration file (`src/config/portfolioData.js`). No need to dig through components to update your resume!
- **Glassmorphism UI:** Stunning frosted glass effects over a dynamic radial gradient background.
- **Theme Support:** Fully functional Light, Dark, and System theme toggle using `next-themes`.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
- **Smart Components:**
  - **Expandable Project Cards:** Long project descriptions are automatically truncated with a "Show More/Less" toggle.
  - **YouTube Integration:** Automatically detects and embeds YouTube video links for the introductory video.

## 🛠️ Technologies Used

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Typography:** [Geist Font](https://vercel.com/font)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <repository-url>
   cd dev-vybyranyi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see your portfolio in action.

## 📝 How to Customize

Updating the portfolio with your own information is incredibly easy. 

1. Open `src/config/portfolioData.js`.
2. Replace the placeholder text, arrays, and URLs with your own data.
3. Save the file. The UI will automatically update!

To change the core theme colors, simply modify the HSL variables inside `src/index.css`.

## 📦 Building for Production

When you're ready to deploy your portfolio to production (e.g., Vercel, Netlify, GitHub Pages), run:

```bash
npm run build
```

This will generate an optimized `dist` folder ready for deployment.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
