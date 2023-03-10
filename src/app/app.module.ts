import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { WhyComponent } from './why/why.component';
import { AchievmentsComponent } from './achievments/achievments.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { SubFooterComponent } from './footer/sub-footer/sub-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    WhyComponent,
    AchievmentsComponent,
    TestimonialComponent,
    CtaComponent,
    FooterComponent,
    SubFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
