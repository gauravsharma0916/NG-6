import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
    selector: 'app-register',
    templateUrl: './app.register.html'

})

export class RegisterComponent {
    registrationForm:FormGroup;

constructor(private fb:FormBuilder){
    this.registrationForm=this.fb.group({
        Firstname:['Gaurav sharma',Validators.minLength(6)],
        Lastname:'',
        mailid:'',
        mobile:'',
        password:'',
        confirmpassword:''
    })
}


    demo() {
        console.log('Form value is',this.registrationForm.value);
           }
           
                            };
