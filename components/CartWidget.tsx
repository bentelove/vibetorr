'use client';
import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { money } from '@/lib/products';

export function CartWidget(){
  const subtotal=12990;
  const threshold=10000;
  const progress=Math.min(100,Math.round(subtotal/threshold*100));
  return <aside className="fixed bottom-5 right-4 z-30 w-[min(360px,calc(100vw-32px))] overflow-hidden rounded-[28px] bg-ink text-white shadow-2xl md:bottom-7 md:right-[max(24px,calc((100vw-1280px)/2+24px))]">
    <Link href="/cart" className="block p-5 transition hover:bg-white/5">
      <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-terra"><ShoppingBag size={19}/></span><div className="flex-1"><p className="text-sm font-bold">В корзине 2 ковра</p><p className="mt-0.5 text-xs text-white/60">На сумму {money(subtotal)}</p></div><ArrowRight size={18}/></div>
      <div className="mt-5"><div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/65"><span>Доставка 500 ₽</span><span className="text-sand">Бесплатно от 10 000 ₽</span></div><div className="relative mt-2 h-1.5 rounded-full bg-white/15"><span className="absolute left-0 top-0 h-full rounded-full bg-terra" style={{width:`${progress}%`}}/><i className="absolute -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-terra" style={{left:`calc(${progress}% - 7px)`}}/></div><p className="mt-2 text-xs text-sand">Ваша доставка уже бесплатна — отличный выбор.</p></div>
    </Link>
  </aside>
}
