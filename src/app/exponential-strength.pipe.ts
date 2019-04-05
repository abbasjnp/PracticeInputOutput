import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: any, exponent:string): any {
    //let exp = parseFloat(exponent)
    let exp =parseFloat(exponent);
    return Math.pow(value,isNaN(exp) ? 1 : exp); 
    
  }

}
