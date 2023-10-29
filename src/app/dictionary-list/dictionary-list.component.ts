import { Component, OnInit } from '@angular/core';
import { Word } from '../word.model';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.scss'],
})
export class DictionaryListComponent implements OnInit {
  allDictionary: Word[] = [];
  dictionary: Word[] = [];
  selectedCategory = 'all';
  categories = [
    { label: 'all', value: 'all' },
    { label: 'in progress', value: 'progress' },
    { label: 'done', value: 'done' },
  ];

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.allDictionary = this.dictionaryService.getAllWords();
    this.handleCategorySelection();
  }

  handleCategorySelection() {
    if (this.selectedCategory === 'progress') {
      this.dictionary = this.allDictionary.filter((item) => item.status === 1);
    } else if (this.selectedCategory === 'done') {
      this.dictionary = this.allDictionary.filter((item) => item.status === 2);
    } else {
      this.dictionary = this.allDictionary;
    }
  }
}
