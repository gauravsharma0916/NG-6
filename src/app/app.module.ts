import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingmodule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// add componenets here
import { AppComponent } from './app.component';
import { FirstComponent } from './app.firstcomponent';
import { SecondComponent } from './app.secondcomponent';
import { AboutusComponent } from './app.aboutuscomponent';
import { ContactusComponent } from './app.contactuscomponent';
// add service here
import { UserService } from '../service/UserService';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AboutusComponent,
    ContactusComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingmodule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
