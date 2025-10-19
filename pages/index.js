import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AuraMarket | Boutique Perfume Marketplace</title>
        <meta
          name="description"
          content="Discover artisan fragrances in a curated glassmorphism inspired marketplace."
        />
      </Head>
      <section className="space-y-12">
        <div className="glass-surface glass-border rounded-3xl p-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Curate Your Signature Aura
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Explore hand-crafted fragrances, transparent sourcing, and sensory storytelling designed for the
            modern collector.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <article className="glass-surface glass-border flex h-full flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>{product.brand}</span>
                    <span className="rounded-full bg-brand/20 px-3 py-1 text-brand-light">{product.badge}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-100">{product.name}</h2>
                  <p className="text-sm leading-relaxed text-slate-300">{product.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-200">
                  <span>{product.notes.slice(0, 2).join(' • ')}...</span>
                  <span className="text-lg font-semibold text-brand">${product.price}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
