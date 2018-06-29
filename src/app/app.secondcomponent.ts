import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService';



@Component({
    selector: 'app-second',
    templateUrl: './app.secondcomponent.html'

})

export class SecondComponent implements OnInit{
    public data_container:any=[];
    constructor(private data:UserService) {}
    ngOnInit() {
        let pp=this.data.getData().subscribe(response=>{            
            this.data_container=response;
            if(response){
                localStorage.setItem('here is your data',this.data_container[0].BUY);
            }
        console.log("service call data is here",this.data_container);        
        });
        
           }
                            }
