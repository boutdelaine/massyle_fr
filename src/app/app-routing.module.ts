import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/sections/about/about.component';
import { PortfolioComponent } from './component/sections/portfolio/portfolio.component';
import { WelcomeComponent } from './component/sections/welcome/welcome.component';
import { ContactComponent } from './component/sections/contact/contact.component';
import { BlogComponent } from './component/pages/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { 
    path: '', 
    component: WelcomeComponent 
  },
  { 
    path: '#portfolio', 
    component: PortfolioComponent 
  },
  { 
    path: '#about', 
    component: AboutComponent 
  },
  { 
    path: '#contact', 
    component: ContactComponent 
  },
  { 
    path: '', 
    component: BlogComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
