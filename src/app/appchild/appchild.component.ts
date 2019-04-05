import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Output,EventEmitter} from '@angular/core'

@Component({
  selector: 'app-appchild',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent implements OnInit,OnChanges {
  @Input() stock:number;
  @Input() productId:number;
  @Output() stockvalueChange = new EventEmitter();
  updateStockValue:number;
  @Input() data:any;
  @Input() out:any;
  color='';
  p=1;
  constructor() { }
 

  ngOnInit() {
  }
  stockValueChanged(){
    this.stockvalueChange.emit({id:this.productId,updateStock:this.updateStockValue});
    this.updateStockValue=null;
  }
  ngOnChanges(){
    if(this.stock>10){
            this.color='green';
    }
    else{
      this.color='red';
    }
  }

  

}
