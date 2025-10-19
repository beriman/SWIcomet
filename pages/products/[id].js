import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { getProductById, products } from '@/lib/products';

export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="glass-surface glass-border rounded-3xl p-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-100">Composing Aroma</h1>
          <p className="mt-2 text-slate-300">Decanting the experience, please wait a moment...</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="glass-surface glass-border rounded-3xl p-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-100">Fragrance Not Found</h1>
          <p className="mt-2 text-slate-300">We couldn\'t find the aroma you were looking for.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{product.name} | AuraMarket</title>
        <meta name="description" content={product.description} />
      </Head>
      <article className="glass-surface glass-border grid gap-12 rounded-3xl p-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.brand}</span>
          <h1 className="text-4xl font-semibold text-slate-100">{product.name}</h1>
          <p className="text-base leading-relaxed text-slate-300">{product.description}</p>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Fragrance Notes</h2>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
              {product.notes.map((note) => (
                <li key={note} className="glass-surface glass-border rounded-full px-4 py-2 text-slate-100">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="flex flex-col justify-between gap-6 rounded-3xl bg-white/5 p-8 text-slate-100">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Investment</p>
            <p className="mt-2 text-4xl font-semibold text-brand">${product.price}</p>
          </div>
          <button className="glass-surface glass-border rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-100 transition hover:bg-white/30">
            Add to Cart
          </button>
          <p className="text-xs text-slate-400">
            Supplied through ethically sourced essences with transparent lot tracing.
          </p>
        </aside>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: products.map((product) => ({ params: { id: product.id } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.id) || null;

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
}
