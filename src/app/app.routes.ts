import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProductDetail } from './pages/product/product';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'product/:id', component: ProductDetail },
  { path: 'contact', component: Contact },
];
