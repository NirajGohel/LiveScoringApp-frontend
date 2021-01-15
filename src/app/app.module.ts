import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

// import { ScorerModule } from './modules/scorer/scorer.module';
import { LoginComponent } from './modules/scorer/login/login.component';
import { SignupComponent } from './modules/scorer/signup/signup.component';
import { DashboardComponent } from './modules/scorer/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //ScorerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
