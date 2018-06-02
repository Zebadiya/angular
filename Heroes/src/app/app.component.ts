import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Phone} from './phone';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit {
    name= '';

    condition: boolean=true;
    toggle(){
        this.condition=!this.condition;
    }

    items: Phone[] = [];
    constructor(private dataService: DataService){}

    addItem(name: string, price: number){

      this.dataService.addData(name, price);
    }
    ngOnInit(){
      this.items= this.dataService.getData();
    }
}
