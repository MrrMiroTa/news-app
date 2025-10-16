# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
This project is a small React + Vite news app. I updated the UI to use Tailwind CSS + DaisyUI and applied a modern, responsive layout.

Quick start

- Install dependencies:

  npm install

- Run dev server:

  npm run dev

Notes

- Tailwind CSS and DaisyUI are already added as dependencies. The Tailwind config file is at `tailwind.config.cjs` and global styles are in `src/index.css`.
- The components were updated to use Tailwind utility classes and are responsive across mobile, tablet and desktop breakpoints.
- Optional: add a system font like Inter via Google Fonts or locally for an even cleaner look.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
