import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './component/components/footer/footer.component';
import { WelcomeComponent } from './component/sections/welcome/welcome.component';
import { PortfolioComponent } from './component/sections/portfolio/portfolio.component';
import { AboutComponent } from './component/sections/about/about.component';
import { ContactComponent } from './component/sections/contact/contact.component';
import { TestimonialsComponent } from './component/sections/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
