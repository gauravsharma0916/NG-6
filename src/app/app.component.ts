import { Component } from '@angular/core';
import { FirstComponent } from './app.firstcomponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public task = true;
  title = 'call karo';

  myMethod() {
     alert('buuton cliked');

  }

}


