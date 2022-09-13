import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  public actualWord: Word = new Word();
  public words: Array<Word> = new Array<Word>();
  public gameWords: Array<Word> = new Array<Word>();
  public actualGameWord: Word = new Word();
  public actualTry: string = '';
  public resultState: boolean = false;

  constructor() {
    this.import();
  }
  
  add(){
    this.words.push(this.actualWord.GetCopy());
    this.actualWord = new Word();
    this.export();
  }

  remove(id: string){
    this.words = this.words.filter(t => t.id != id);
    this.export();
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  import(){
    let data = localStorage.getItem('words');
    if (data == null){
      this.words = new Array<Word>();
    }
    else{
      this.words = JSON.parse(data);
    }
  }

  export(){
    localStorage.setItem('words', JSON.stringify(this.words));
  }

  gameInit(num: number){
    //csinálunk egy új tömböt, amibe kiválogatunk pont ennyi véletlenszerű szót
    this.gameWords = new Array<Word>();
    for(let i = 1; i <= num; i++){
      let w: Word = this.words[this.getRndInteger(0,this.words.length-1)];
      if (this.gameWords.filter(t => t.id == w.id).length > 0){
        i--;
      }
      else{
        this.gameWords.push(w);
      }
    }
    this.actualGameWord = this.gameWords.pop() as Word;
  }

  check(){
    this.resultState = true;
    if (this.actualGameWord.eng == this.actualTry){
      this.actualGameWord.goods++;
    }
    else{
      this.actualGameWord.bads++;
    }
    this.export();
  }

  next(){
    this.resultState = false;
    this.actualGameWord = this.gameWords.pop() as Word;
    this.actualTry = '';
  }


}
