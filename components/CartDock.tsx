'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { money } from '@/lib/products';

export function CartDock() {
  const [open, setOpen] = useState(false);
  const subtotal = 12990;
  const freeFrom = 10000;
  const progress = Math.min(100, Math.round((subtotal / freeFrom) * 100));

  return <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40"><div className="container flex justify-end"><div className="pointer-events-auto relative w-full max-w-[395px]">
    {open && <div className="mb-3 rounded-[28px] border border-ink/10 bg-cream p-5 shadow-soft"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.13em] text-terra">В вашей корзине</p><p className="mt-1 font-serif text-2xl">Ковёр Лунна</p></div><button onClick={()=>setOpen(false)} aria-label="Закрыть"><X size={18}/></button></div><div className="mt-5 border-t border-ink/10 pt-4"><div className="flex justify-between text-sm"><span>1 товар</span><b>{money(subtotal)}</b></div><Link href="/cart" className="button button-dark mt-5 w-full">Перейти к оформлению <ArrowRight size={16}/></Link></div></div>}
    <button onClick={()=>setOpen(!open)} className="w-full overflow-hidden rounded-[28px] border border-ink/10 bg-cream text-left shadow-soft"><div className="flex items-center gap-3 px-5 pt-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terra text-white"><ShoppingBag size={18}/></span><span className="flex-1"><span className="block text-sm font-bold">Корзина · {money(subtotal)}</span><span className="mt-0.5 block text-[11px] text-black/55">Бесплатная доставка уже ваша</span></span><span className="text-xl">{open ? '−' : '+'}</span></div><div className="px-5 pb-4 pt-4"><div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-black/45"><span>Доставка 500 ₽</span><span>От 10 000 ₽ — бесплатно</span></div><div className="relative mt-2 h-2 rounded-full bg-sand/55"><div className="absolute left-0 top-0 h-2 rounded-full bg-terra" style={{width:`${progress}%`}}/><i className="absolute left-0 top-1/2 h-3 w-3 -translate-x-0 -translate-y-1/2 rounded-full border-2 border-cream bg-terra"/><i className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-cream bg-sage"/></div></div></button>
  </div></div></div>;
}
