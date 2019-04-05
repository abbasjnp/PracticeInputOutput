import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  sendValue;
  ngOnInit() {
    
  }

  getValuefromChildAPPCHILD(event){
    console.log(event,"eventttttt");
    this.sendValue= event.id;

  }

}
