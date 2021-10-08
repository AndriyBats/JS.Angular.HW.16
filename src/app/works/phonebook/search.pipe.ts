import { Pipe, PipeTransform } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { ISubscriber } from './subscriber.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<ISubscriber>, searchWord: string ): Array<ISubscriber> {
    if(!searchWord){
      return value;
    }else if(!value){
      return  [];
    }
    return value.filter(name => {
      if(name.firstName.toLowerCase().includes(searchWord.toLowerCase())){
        return name.firstName.toLowerCase().includes(searchWord);
      }else if(name.lastName.toLowerCase().includes(searchWord.toLowerCase())){
        return name.lastName.toLowerCase().includes(searchWord);
      }else{
        return name.numberPhone.includes(searchWord);
      }
    })
  }
}
