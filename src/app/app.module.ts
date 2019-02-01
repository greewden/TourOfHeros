import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

<<<<<<< HEAD
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
>>>>>>> 4fd2119aaba7c71ad71f9909a10979c5f0003a67

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
=======
    HeroesComponent
>>>>>>> 4fd2119aaba7c71ad71f9909a10979c5f0003a67
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
