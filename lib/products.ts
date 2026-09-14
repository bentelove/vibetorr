export type Product = { id:number; slug:string; name:string; price:number; oldPrice?:number; image:string; color:string; size:string; badge?:string; style:string };
export const products: Product[] = [
 {id:1,slug:'lunna-pesok',name:'Лунна',price:12990,oldPrice:15990,image:'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85',color:'Песочный',size:'160 × 230 см',badge:'Хит',style:'Современный'},
 {id:2,slug:'moss-sage',name:'Мосс',price:16490,image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',color:'Шалфейный',size:'200 × 300 см',badge:'Новинка',style:'Современный'},
 {id:3,slug:'fika-cream',name:'Фика',price:8990,image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',color:'Молочный',size:'140 × 200 см',style:'Классический'},
 {id:4,slug:'terrakotta',name:'Терра',price:13990,image:'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=900&q=85',color:'Терракотовый',size:'160 × 230 см',style:'Современный'},
 {id:5,slug:'nord-krug',name:'Норд',price:10990,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',color:'Натуральный',size:'Ø 160 см',badge:'-20%',style:'Круглый'},
 {id:6,slug:'senja',name:'Сенья',price:18990,image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85',color:'Серый',size:'200 × 300 см',style:'Детский'}
];
export const money = (value:number) => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
