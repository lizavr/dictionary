import { Word } from './word.model';

export class DictionaryService {
  wordsArr: Word[] = [
    {
      id: '1',
      valueEn: 'cat',
      valueRu: 'кот',
      status: 1,
    },
    {
      id: '2',
      valueEn: 'dog',
      valueRu: 'собака',
      status: 1,
    },
    {
      id: '3',
      valueEn: 'tired',
      valueRu: 'усталь',
      status: 2,
    },
  ];

  getAllWords() {
    return this.wordsArr.slice();
  }

  getWordById(id: string) {
    return this.wordsArr.find((item) => item.id === id);
  }

  updateWord(word: Word) {
    const existWord = this.wordsArr.find((item) => item.id === word.id);
    existWord.valueEn = word.valueEn;
    existWord.valueRu = word.valueRu;
  }

  addWord(word: Word) {
    this.wordsArr.push(word);
  }
}
