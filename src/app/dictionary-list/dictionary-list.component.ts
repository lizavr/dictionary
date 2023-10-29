import { Component, OnInit } from '@angular/core';
import { Word } from '../word.model';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.scss'],
})
export class DictionaryListComponent implements OnInit {
  dictionary: Word[] = [];

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.getAllWords();
  }
}
