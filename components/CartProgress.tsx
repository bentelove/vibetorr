'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { money } from '@/lib/products';

const deliveryThreshold = 10000;
const cartTotal = 8990;

export function CartProgress() {
  const [visible, setVisible] = useState(true);
  const progress = Math.min((cartTotal / deliveryThreshold) * 100, 100);
  const remaining = Math.max(deliveryThreshold - cartTotal, 0);

  if (!visible) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-[1232px] sm:bottom-6 sm:left-6 sm:right-6">
      <div className="ml-auto w-full max-w-[390px] rounded-[28px] rounded-br-md border border-white/60 bg-cream/95 p-5 shadow-[0_20px_60px_rgba(46,48,45,.22)] backdrop-blur-xl">
        <button onClick={() => setVisible(false)} className="absolute right-4 top-4 rounded-full p-1 text-ink/45 hover:bg-black/5" aria-label="Скрыть корзину"><X size={15}/></button>
        <Link href="/cart" className="flex items-center gap-3 pr-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white"><ShoppingBag size={18}/></span>
          <span><span className="block text-sm font-bold">В корзине 1 ковёр</span><span className="mt-0.5 block text-xs text-ink/55">{money(cartTotal)}</span></span>
          <ArrowRight className="ml-auto" size={18}/>
        </Link>
        <div className="mt-5">
          <div className="mb-2 flex items-end justify-between gap-4 text-[11px] leading-4">
            <span className="max-w-[145px] text-ink/60">Доставка от <b className="text-ink">500 ₽</b></span>
            <span className="max-w-[150px] text-right text-ink/60">Бесплатно от <b className="text-ink">10 000 ₽</b></span>
          </div>
          <div className="relative h-2 rounded-full bg-sand/60"><div className="h-2 rounded-full bg-terra transition-all" style={{ width: `${progress}%` }}/><i className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-cream bg-terra"/><i className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-cream bg-sage"/></div>
          <p className="mt-3 text-xs leading-5 text-ink/65">{remaining > 0 ? <>Добавьте ещё <b className="text-terra">{money(remaining)}</b> — и доставка станет бесплатной.</> : <b className="text-sage">Ваша доставка бесплатна.</b>}</p>
        </div>
      </div>
    </aside>
  );
}
