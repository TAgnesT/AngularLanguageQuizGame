import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Word } from '../word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  num: number = 0;
  service: WordService;
  router: Router;
  constructor(service: WordService, router: Router) {
    this.service = service;
    this.router = router;
   }

  ngOnInit(): void {
  }

  play(){
    if (this.num < 1){
      alert('Please choose larger number!');
    }
    else if (this.num > this.service.words.length){
      alert('Please choose smaller number!');
    }
    else{
      this.router.navigate(['game', this.num]);
    }
  }

  

}
