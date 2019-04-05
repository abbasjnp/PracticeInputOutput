import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
}

products =[];
ok;
title ="products";
newProduct;

  constructor(){
    this.products=this.getProducts();
  }
  updateStockValue(event){
    this.newProduct = this.products.find(value=>value.id==event.id);
    this.newProduct.stock = this.newProduct.stock + event.updateStock;
    console.log(event);
    this.ok=true;



  }

  
 
  

  

 
}
