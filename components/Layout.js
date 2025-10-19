import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-10 glass-surface glass-border backdrop-blur-xl bg-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold uppercase tracking-widest text-brand">
            AuraMarket
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition hover:text-brand-light">
              Collections
            </Link>
            <Link href="/cart" className="transition hover:text-brand-light">
              Cart
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-6 py-12">{children}</main>
      <footer className="px-6 pb-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} AuraMarket. Crafted fragrances, curated digitally.
      </footer>
    </div>
  );
}
