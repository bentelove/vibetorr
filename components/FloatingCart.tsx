'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export function FloatingCart() {
  const progress = 75;
  return <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40"><div className="container flex justify-end"><Link href="/cart" aria-label="Открыть корзину" className="pointer-events-auto flex items-center gap-3 rounded-full border border-ink/10 bg-cream/95 py-2 pl-2 pr-3 shadow-soft backdrop-blur transition hover:-translate-y-1"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white"><ShoppingBag size={17}/></span><div className="w-28 sm:w-36"><div className="flex items-center justify-between text-[10px] font-bold tracking-wide text-ink/55"><span>500 ₽</span><span>10 000 ₽</span></div><div className="relative mt-2 h-1.5 rounded-full bg-sand/70"><span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-terra"/><span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-sage"/><span className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-cream bg-ink shadow" style={{left:`calc(${progress}% - 7px)`}}/></div></div></Link></div></div>
}
