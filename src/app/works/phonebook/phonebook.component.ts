import { Component, OnInit } from '@angular/core';
import { ISubscriber } from './subscriber.interface';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  public placeholderSearch: string = 'search text goes here';
  public placeholderAddFirstName:string = 'first name goes here';
  public placeholderAddSecondName:string = 'second name goes here';
  public placeholderAddNumberPhone:string = 'number phone goes here';
  public newSubscriber!: ISubscriber;
  public arrSubscribers: Array<ISubscriber> = [
    {
      firstName: "Petya",
      lastName: "Zhuk",
      numberPhone: "0631111111"
    },
    {
      firstName: "Petro",
      lastName: "Petriv",
      numberPhone: "0631222222"
    },
    {
      firstName: "Alejandro",
      lastName: "Del Rio Albreched",
      numberPhone: "0634444444"
    },
    {
      firstName: "Vasylyna",
      lastName: "Vrublevska",
      numberPhone: "0635555555"
    },
    {
      firstName: "Ira",
      lastName: "Tytar",
      numberPhone: "0636666666"
    },
    {
      firstName: "Sofia",
      lastName: "Zhuk",
      numberPhone: "0977777777"
    }
  ]
  public newFirstName!: string;
  public newLastName!: string;
  public newNumberPhone!: string;
  public searchWord = '';
  public numberOfSubscriber!: number;
  public isEdit: boolean = false;
  public isSortUpFirstName: boolean = false;
  public isSortUpLastName: boolean = false;
  public isSortUpNumberPhone: boolean = false;
  public arrowFirstName: boolean = false;
  public arrowLastName: boolean = false;
  public arrowNumberPhone: boolean = false;
  public selectSort: number = 0;
   
  constructor() { }

  ngOnInit(): void {
  }

  addSubscriber(): void {
    this.newSubscriber = {firstName: this.newFirstName, lastName: this.newLastName, numberPhone: this.newNumberPhone};
    if(this.isEdit){
      this.arrSubscribers[this.numberOfSubscriber] = this.newSubscriber;
      this.isEdit = false;
    }else{
      this.arrSubscribers.push(this.newSubscriber);  
    }
    this.newFirstName = '';
    this.newLastName = '';
    this.newNumberPhone = '';
  }

  deleteSubscriber(index: number): void{
    this.arrSubscribers.splice(index, 1);
  }

  editSubscriber(index: number): void {
    this.newFirstName = this.arrSubscribers[index].firstName;
    this.newLastName = this.arrSubscribers[index].lastName;
    this.newNumberPhone = this.arrSubscribers[index].numberPhone;
    this.numberOfSubscriber = index;
    this.isEdit = true;
  }

  sortFirstName(): void  {
    this.isSortUpFirstName = !this.isSortUpFirstName;
    this.arrowFirstName = true;
    this.arrowLastName = false;
    this.arrowNumberPhone = false;
    this.selectSort = 1;
  }

  sortLastName(): void  {
    this.isSortUpLastName = !this.isSortUpLastName;
    this.arrowFirstName = false;
    this.arrowLastName = true;
    this.arrowNumberPhone = false;
    this.selectSort = 2;
  }

  sortNumberPhone(): void  {
    this.isSortUpNumberPhone = !this.isSortUpNumberPhone;
    this.arrowFirstName = false;
    this.arrowLastName = false;
    this.arrowNumberPhone = true;
    this.selectSort = 3;
  }

}
