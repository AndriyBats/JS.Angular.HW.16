import { Pipe, PipeTransform } from '@angular/core';
import { ISubscriber } from './subscriber.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<ISubscriber>, selectSort: number, isSortUpFirstName: boolean, isSortUpLastName: boolean, isSortUpNumberPhone: boolean): Array<ISubscriber> {
    if (selectSort === 0) {
      return value;
    } else if (selectSort === 1) {
      if(isSortUpFirstName === true){
        return value.sort((a, b) => (a.firstName > b.firstName)? 1: (a.firstName < b.firstName)? -1: 0);
      }else{
        return value.sort((a, b) => (a.firstName > b.firstName)? 1: (a.firstName < b.firstName)? -1: 0).reverse();
      }
    }else if(selectSort === 2){
      if(isSortUpLastName === true){
        return value.sort((a, b) => (a.lastName > b.lastName)? 1: (a.lastName < b.lastName)? -1: 0);
      }else{
        return value.sort((a, b) => (a.lastName > b.lastName)? 1: (a.lastName < b.lastName)? -1: 0).reverse();
      }
    }else{
      if(isSortUpNumberPhone === true){
        return value.sort((a, b) => (a.numberPhone > b.numberPhone)? 1: (a.numberPhone < b.numberPhone)? -1: 0);
      }else{
        return value.sort((a, b) => (a.numberPhone > b.numberPhone)? 1: (a.numberPhone < b.numberPhone)? -1: 0).reverse();
      }
    }
  }
}
