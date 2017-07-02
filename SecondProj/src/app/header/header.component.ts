import {Component,Input} from '@angular/core';
import {InputOutput} from './input-output';

@Component({
  selector: 'app-header',
  directives:[InputOutput],
    template:`<button (click)="update()">Update</button>
                <input-output 
                            plain="just a simple attribute"
                            fixedValue="another hard coded value"
                            (stringChanged)="myStringChanged($event)"
                            [mySum]="runningTotal"
                            [growingString]="myString"
                            [counter]="count"
                </input-output>`
})
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class InputOutputDemo{
    count = 0;
    runningTotal = 0;
    myString = '';
    myTitle = 'Input/Output Demo';
    update(){
        this.count++;
        this.runningTotal += this.count;
        this.myString += 'A';
    }
    myStringChanged(val){
        console.log(val);
    }
}
