import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  service: WordService;
  constructor(service: WordService) {
    this.service = service;
  }

  ngOnInit(): void {
  }

  

}
