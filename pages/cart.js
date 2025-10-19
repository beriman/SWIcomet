import Head from 'next/head';
import Layout from '@/components/Layout';

const mockCart = [
  {
    id: 'amber-nocturne',
    name: 'Amber Nocturne',
    brand: 'Noir Atelier',
    price: 156,
    quantity: 1,
  },
];

export default function CartPage() {
  const subtotal = mockCart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Layout>
      <Head>
        <title>Your Cart | AuraMarket</title>
        <meta name="description" content="Review your fragrance selections and prepare to checkout." />
      </Head>
      <div className="glass-surface glass-border space-y-8 rounded-3xl p-10">
        <header className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-100">Shopping Cart</h1>
            <p className="mt-2 text-sm text-slate-300">Refine your palette before completing your purchase.</p>
          </div>
          <span className="text-sm uppercase tracking-[0.3em] text-slate-400">{mockCart.length} items</span>
        </header>
        <ul className="space-y-6">
          {mockCart.map((item) => (
            <li key={item.id} className="glass-surface glass-border flex items-center justify-between rounded-2xl px-6 py-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.brand}</p>
                <p className="text-lg font-semibold text-slate-100">{item.name}</p>
              </div>
              <div className="text-right text-slate-200">
                <p className="text-sm">Qty {item.quantity}</p>
                <p className="text-xl font-semibold text-brand">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <footer className="flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-300">
            Subtotal <span className="ml-2 text-2xl font-semibold text-brand">${subtotal.toFixed(2)}</span>
          </div>
          <button className="glass-surface glass-border rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-100 transition hover:bg-white/30">
            Proceed to Checkout
          </button>
        </footer>
      </div>
    </Layout>
  );
}
