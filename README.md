# Pick Proud - Expert-Curated Product Recommendations

**Pick Proud** is a modern, responsive web application designed to help users find the best products across various categories without the guesswork. We research, compare, and test products to provide expert-curated recommendations you can trust.

![Project Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## 🚀 Features

- **Curated Top Picks**: Expertly selected products with "Editor's Pick", "Best Value", and "Top Rated" badges.
- **Category Browsing**: Seamlessly browse products across Tech, Home, Gadgets, Audio, Fitness, and Office.
- **Product Details**: Comprehensive information including ratings, review counts, and direct affiliate links.
- **Search Functionality**: Quickly find specific products using the integrated search bar.
- **Modern UI/UX**: Built with a focus on aesthetics, responsiveness, and smooth animations.
- **Dynamic Filtering**: Easily filter products by category or popularity.

## 🛠️ Tech Stack

This project is built using the latest web technologies for performance and maintainability:

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) (React Query)
- **Routing**: [React Router Dom](https://reactrouter.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Runtime/Package Manager**: [Bun](https://bun.sh/) (Optional, supports npm/yarn/pnpm)

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd pick-proud
   ```

2. Install dependencies:
   ```sh
   # If using npm
   npm install

   # If using Bun
   bun install
   ```

### Development

Start the development server with auto-reloading:

```sh
# If using npm
npm run dev

# If using Bun
bun dev
```

The application will be available at `http://localhost:8080` (or the port specified by Vite).

### Building for Production

To create an optimized production build:

```sh
# If using npm
npm run build

# If using Bun
bun run build
```

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (shadcn/ui, Layout, etc.)
├── data/           # Static product data and constants
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and library configurations
├── pages/          # Main page components (Index, Products, Detail, etc.)
├── App.tsx         # Main application component and routing
└── main.tsx        # Application entry point
```

## 🧪 Testing

The project uses [Vitest](https://vitest.dev/) for unit and component testing.

```sh
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🌐 Deployment

This project is optimized for deployment on platforms like **Vercel**, **Netlify**, or **GitHub Pages**. Simply connect your repository and the build command `npm run build` with the output directory `dist` will handle the rest.

---

Built with ❤️ by the Pick Proud Team.
