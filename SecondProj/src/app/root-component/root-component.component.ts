import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
  //styles : ["div{background-color : blue}"]
})
export class RootComponentComponent implements OnInit {
  title     : string;
	firstName : string;
	lastName  : string;
  constructor() { }

  ngOnInit() {
  	this.title     = "Ms";
  	this.firstName = "Shruthi";
    this.lastName  = "S S";
  }

  addName(firstName,lastName){
    console.log(this.title + ". "+ firstName.value+" "+ lastName.value);
  }

 
}
