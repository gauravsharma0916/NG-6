import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// for using form 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingmodule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// add componenets here
import { AppComponent } from './app.component';
import { FirstComponent } from './app.firstcomponent';
import { SecondComponent } from './app.secondcomponent';
import { AboutusComponent } from './app.aboutuscomponent';
import { ContactusComponent } from './app.contactuscomponent';
import { RegisterComponent } from './app.register';
// add service here
import { UserService } from '../service/UserService';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingmodule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
