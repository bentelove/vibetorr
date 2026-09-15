'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { money } from '@/lib/products';

const subtotal = 7490;
const freeShippingFrom = 10000;
const deliveryPrice = 500;

export function FloatingCart() {
  const [open, setOpen] = useState(false);
  const progress = Math.min(100, (subtotal / freeShippingFrom) * 100);
  const remaining = Math.max(freeShippingFrom - subtotal, 0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return <>
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40">
      <div className="container flex justify-end">
        <button onClick={() => setOpen(true)} aria-label="Открыть корзину" className="pointer-events-auto flex items-center gap-3 rounded-full border border-ink/10 bg-cream/95 py-2 pl-2 pr-4 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-terra/40">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white"><ShoppingBag size={17}/></span>
          <span className="text-left"><span className="block text-xs font-bold">Корзина</span><span className="mt-0.5 block text-[11px] text-ink/55">{money(subtotal)}</span></span>
          <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-terra px-1 text-[10px] font-bold text-white">2</span>
        </button>
      </div>
    </div>

    <div className={`fixed inset-0 z-50 transition ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
      <button onClick={() => setOpen(false)} aria-label="Закрыть корзину" className={`absolute inset-0 bg-ink/30 backdrop-blur-[2px] transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}/>
      <aside aria-label="Мини-корзина" className={`absolute bottom-0 right-0 top-0 flex w-full max-w-[460px] flex-col bg-cream shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-8"><div><p className="eyebrow">Ваш выбор</p><h2 className="mt-1 text-3xl">Корзина</h2></div><button onClick={() => setOpen(false)} aria-label="Закрыть" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 transition hover:bg-white"><X size={18}/></button></div>
        <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8">
          <div className="rounded-[22px] bg-white p-4"><div className="flex gap-4"><div className="h-20 w-20 shrink-0 rounded-2xl bg-sand"/><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><div><p className="font-serif text-xl">Лунна</p><p className="mt-1 text-xs text-ink/55">Песочный · 160 × 230 см</p></div><button className="text-xs text-ink/45 underline underline-offset-4">Удалить</button></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center rounded-full border border-ink/10"><button className="p-2"><Minus size={13}/></button><span className="w-6 text-center text-xs font-bold">1</span><button className="p-2"><Plus size={13}/></button></div><b className="text-sm">{money(subtotal)}</b></div></div></div></div>
          <div className="mt-6 rounded-[24px] border border-terra/15 bg-terra/5 p-5"><div className="flex items-center justify-between"><p className="text-sm font-bold">Доставка</p><p className="text-xs text-ink/55">от {money(deliveryPrice)}</p></div><div className="mt-5"><div className="relative h-2 rounded-full bg-sand/80"><span className="absolute left-0 top-0 h-full rounded-full bg-terra transition-all" style={{width:`${progress}%`}}/><span className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-cream bg-terra shadow-sm"/><span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-cream bg-sage shadow-sm"/><span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-cream bg-ink shadow-sm" style={{left:`calc(${progress}% - 8px)`}}/></div><div className="mt-3 flex justify-between text-[11px] font-medium text-ink/55"><span>Заказ от 500 ₽</span><span>От 10 000 ₽ — бесплатно</span></div></div><p className="mt-4 text-sm leading-5 text-ink/75">Добавьте товаров ещё на <b className="text-terra">{money(remaining)}</b>, чтобы получить бесплатную доставку.</p></div>
        </div>
        <div className="border-t border-ink/10 bg-white px-6 py-5 sm:px-8"><div className="flex items-end justify-between"><span className="text-sm text-ink/55">Итого</span><b className="font-serif text-3xl">{money(subtotal)}</b></div><button className="button button-dark mt-5 w-full">Перейти к оформлению <ArrowRight size={16}/></button></div>
      </aside>
    </div>
  </>;
}
