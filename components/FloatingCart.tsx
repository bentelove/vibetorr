'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { money } from '@/lib/products';

const subtotal = 7490;
const freeShippingFrom = 10000;
const remaining = freeShippingFrom - subtotal;
const progress = Math.round((subtotal / freeShippingFrom) * 100);

export function FloatingCart() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40">
      <div className="container flex justify-end">
        <Link href="/cart" className="pointer-events-auto w-full max-w-[350px] overflow-hidden rounded-[28px] border border-ink/10 bg-cream/95 p-4 shadow-soft backdrop-blur transition hover:-translate-y-1 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white"><ShoppingBag size={18}/></span>
              <div><p className="text-sm font-bold">В корзине 2 товара</p><p className="mt-0.5 text-xs text-black/55">На сумму {money(subtotal)}</p></div>
            </div>
            <span className="text-xs font-bold text-terra">Открыть →</span>
          </div>
          <div className="mt-4">
            <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-[.08em] text-black/55"><span>Доставка 500 ₽</span><span>Бесплатно от 10 000 ₽</span></div>
            <div className="h-1.5 overflow-hidden rounded-full bg-sand/65"><div className="h-full rounded-full bg-terra" style={{width:`${progress}%`}}/></div></div>
            <p className="mt-2 text-xs text-ink/70">Добавьте ещё на <b>{money(remaining)}</b> — и доставка будет бесплатной</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
