import { Word } from './word.model';

export class DictionaryService {
  wordsArr: Word[] = [
    {
      valueEn: 'cat',
      valueRu: 'кот',
      status: 1,
    },
    {
      valueEn: 'dog',
      valueRu: 'собака',
      status: 1,
    },
  ];

  getAllWords() {
    return this.wordsArr;
  }

  // addWord(){
  //   this.wordsArr.push(word);
  // }
}
