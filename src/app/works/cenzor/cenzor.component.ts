import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  public prohibitedWords: Array<string> = ['java', 'tottenham'];
  public newProhibitedWord!: string;
  public isEmpty: boolean = false;
  public isEmptyTextarea: boolean = false;
  public myPlaceholder: string = 'word here..';
  public checkedText!: string;
  public arrCheckedText!: Array<string>;
  public newValue: string = '';
  public placeholderTextarea: string = 'text here..';
  public isNewValueProhibited: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  
  addProhibitedWord(): void{
    if(this.newProhibitedWord){
      this.prohibitedWords.push(this.newProhibitedWord);
      this.newProhibitedWord = '';
      this.isEmpty = false;
      this.myPlaceholder = 'word here..';
    }else{
      this.isEmpty = true;
      this.myPlaceholder = 'Pleace write a word!';
    }
  }

  reset(): void{
    this.prohibitedWords = [];
  }

  cenzor(): void{
    if(this.checkedText){
      this.placeholderTextarea = 'text here..';
      this.isEmptyTextarea = false;
      this.arrCheckedText = this.checkedText.split(' ');
      this.arrCheckedText.forEach((element, ind) => {
        this.prohibitedWords.forEach((elem, index) =>{
          if(element == elem){
            for(let i=0; i<element.length; i++){
              this.newValue += '*';
              this.isNewValueProhibited = true;
            }
          }else if(index == this.prohibitedWords.length - 1 && this.isNewValueProhibited == false){
            this.newValue += this.arrCheckedText[ind];
          } 
        });
        this.newValue += ' ';
        this.isNewValueProhibited = false;
      });
    }else{
      this.placeholderTextarea = 'Pleace write a text!';
      this.isEmptyTextarea = true;
    }
  } 

}
