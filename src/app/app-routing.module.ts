import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FirstComponent} from './app.firstcomponent';
import { SecondComponent } from './app.secondcomponent';
import { AboutusComponent } from './app.aboutuscomponent';
import { ContactusComponent } from './app.contactuscomponent';
// import { ngModuleJitUrl } from '@angular/compiler';


const routes: Routes = [
    {path: 'first',
     component: FirstComponent
    },
    {path: 'second', 
     component: SecondComponent
    },
    {path: 'about-us', 
     component: AboutusComponent
    },
    {path: 'contact-us', 
     component: ContactusComponent
    }


];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingmodule {}

