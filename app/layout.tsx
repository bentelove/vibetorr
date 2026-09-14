import './globals.css'; import type { Metadata } from 'next'; import { Header, Footer } from '@/components/Layout'; import { FloatingCart } from '@/components/FloatingCart';
export const metadata: Metadata={title:'TÖPP — ковры для тёплого дома',description:'Интернет-магазин ковров TÖPP'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Header/><main>{children}</main><FloatingCart/><Footer/></body></html>}
