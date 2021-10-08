import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  private regExpLogin = /^[a-zA-z]{3,15}$/;
  private regExpPassword = /^[\w_-]{4,16}$/;
  private regExpEmailAddress = /^[\w-]*@[\w-]*\.[\w-]*$/;
  public nameLogin!: string;
  public namePassword!: string;
  public nameEmailAddress!: string;
  public backgroundLogin: string = '';
  public backgroundPassword: string = '';
  public backgroundEmailAddress: string = '';
  public arrUsers: Array<IUser> = []; 
  public newUser!: IUser;
  public isEditing: boolean = false;
  public numberOfEditUser!: number; 

  constructor() { }

  ngOnInit(): void {
  }

  validationLogin(): void{
    if(this.regExpLogin.test(this.nameLogin) && this.nameLogin){
      this.backgroundLogin = 'lightgreen';
    }else{
      this.backgroundLogin = 'lightcoral';
    }
  }

  validationPassword(): void{
    if(this.regExpPassword.test(this.namePassword) && this.namePassword){
      this.backgroundPassword = 'lightgreen';
    }else{
      this.backgroundPassword = 'lightcoral';
    }
  }

  validationEmailAddress(): void{
    if(this.regExpEmailAddress.test(this.nameEmailAddress) && this.nameEmailAddress){
      this.backgroundEmailAddress = 'lightgreen';
    }else{
      this.backgroundEmailAddress = 'lightcoral';
    }
  }

  addNewUser(): void{
    if(this.regExpLogin.test(this.nameLogin) == true && this.regExpPassword.test(this.namePassword) == true && this.regExpEmailAddress.test(this.nameEmailAddress) == true){
      this.newUser = {loginUser: this.nameLogin, passwordUser: this.namePassword, emailAddressUser: this.nameEmailAddress};
      this.arrUsers.push(this.newUser);
      this.nameLogin = '';
      this.namePassword = '';
      this.nameEmailAddress = '';
      this.backgroundLogin = '';
      this.backgroundPassword = '';
      this.backgroundEmailAddress = '';
    }
  }

  deleteUser(index: number): void{
    this.arrUsers.splice(index, 1)
  }

  editUser(index: number): void{
    this.newUser = this.arrUsers[index];
    this.nameLogin = this.newUser.loginUser;
    this.namePassword = this.newUser.passwordUser;
    this.nameEmailAddress = this.newUser.emailAddressUser;
    this.numberOfEditUser = index;
    this.isEditing = true;
  }

  updateUser(): void {
    this.newUser = {loginUser: this.nameLogin, passwordUser: this.namePassword, emailAddressUser: this.nameEmailAddress};
    this.arrUsers[this.numberOfEditUser] = this.newUser;
    this.nameLogin = '';
    this.namePassword = '';
    this.nameEmailAddress = '';
    this.backgroundLogin = '';
    this.backgroundPassword = '';
    this.backgroundEmailAddress = '';
    this.isEditing = false;
  }
}
