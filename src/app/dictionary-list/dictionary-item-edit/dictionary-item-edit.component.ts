import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryService } from 'src/app/dictionary.service';
import { Word } from 'src/app/word.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-dictionary-item-edit',
  templateUrl: './dictionary-item-edit.component.html',
  styleUrls: ['./dictionary-item-edit.component.scss'],
})
export class DictionaryItemEditComponent implements OnInit {
  wordForm: FormGroup;
  word: Word;
  isNew = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dictionary: DictionaryService
  ) {}

  ngOnInit() {
    this.wordForm = new FormGroup({
      ru: new FormControl(null, Validators.required),
      en: new FormControl(null, Validators.required),
    });

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.isNew = id === 'new';
      if (!this.isNew) {
        this.word = this.dictionary.getWordById(id);
        this.wordForm.setValue({
          ru: this.word.valueRu,
          en: this.word.valueEn,
        });
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const objWord = {
        id: Guid.create().toString(),
        valueEn: this.wordForm.value['en'],
        valueRu: this.wordForm.value['ru'],
        status: 1,
      };
      this.dictionary.addWord(objWord);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.word.valueRu = this.wordForm.value['ru'];
      this.word.valueEn = this.wordForm.value['en'];
      this.dictionary.updateWord(this.word);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
