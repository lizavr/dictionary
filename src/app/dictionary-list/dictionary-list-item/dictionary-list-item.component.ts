import { Component, Input } from '@angular/core';
import { Word } from 'src/app/word.model';

@Component({
  selector: 'app-dictionary-list-item',
  templateUrl: './dictionary-list-item.component.html',
  styleUrls: ['./dictionary-list-item.component.scss'],
})
export class DictionaryListItemComponent {
  @Input() word: Word = { valueEn: 'sun', valueRu: 'солнце', status: 1 };
}
