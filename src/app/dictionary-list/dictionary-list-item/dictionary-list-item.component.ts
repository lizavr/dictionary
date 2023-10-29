import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/word.model';

@Component({
  selector: 'app-dictionary-list-item',
  templateUrl: './dictionary-list-item.component.html',
  styleUrls: ['./dictionary-list-item.component.scss'],
})
export class DictionaryListItemComponent {
  @Input() word: Word = {
    id: '1',
    valueEn: 'sun',
    valueRu: 'солнце',
    status: 1,
  };
  constructor(private router: Router, private route: ActivatedRoute) {}
  onEdit() {
    this.router.navigate([this.word.id], { relativeTo: this.route });
  }
}
