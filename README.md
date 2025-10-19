# AuraMarket Starter

A Next.js starter for a glassmorphism-inspired perfume marketplace with Tailwind CSS styling and Supabase integration ready for use.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables by creating a `.env.local` file in the project root:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the marketplace.

## Tech Stack

- [Next.js](https://nextjs.org/) with the pages router
- [Tailwind CSS](https://tailwindcss.com/) configured with reusable glassmorphism utilities
- [Supabase](https://supabase.com/) client preconfigured for authentication and data access

## Project Structure

```
.
├── components
│   └── Layout.js
├── lib
│   ├── products.js
│   └── supabaseClient.js
├── pages
│   ├── _app.js
│   ├── cart.js
│   ├── index.js
│   └── products
│       └── [id].js
├── public
├── styles
│   └── globals.css
├── tailwind.config.js
└── README.md
```

## Tailwind Glassmorphism Utilities

Custom utilities such as `glass-surface`, `glass-border`, and `glass-text` are declared in `tailwind.config.js` to enable backdrop blur, transparent layers, and luminous typography across the UI.
