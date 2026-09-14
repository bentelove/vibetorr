'use client';

import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Props = { value:string; options:string[]; onChange:(value:string)=>void; label?:string; compact?:boolean };
export function SelectMenu({value,options,onChange,label,compact=false}:Props){
 const [open,setOpen]=useState(false); const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const close=(event:MouseEvent)=>{if(ref.current&&!ref.current.contains(event.target as Node))setOpen(false)};document.addEventListener('mousedown',close);return()=>document.removeEventListener('mousedown',close)},[]);
 return <div ref={ref} className="relative">{label&&<span className="mb-2 block text-[11px] text-black/50">{label}</span>}<button type="button" onClick={()=>setOpen(!open)} className={`flex w-full items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream text-left text-sm font-medium text-ink transition hover:border-terra ${compact?'px-3 py-2 text-xs':'px-4 py-3'}`}><span>{value}</span><ChevronDown size={15} className={`transition ${open?'rotate-180':''}`}/></button>{open&&<div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-ink/10 bg-white p-1.5 shadow-soft">{options.map(option=><button type="button" key={option} onClick={()=>{onChange(option);setOpen(false)}} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-cream"><span>{option}</span>{value===option&&<Check size={15} className="text-terra"/>}</button>)}</div>}</div>
}
