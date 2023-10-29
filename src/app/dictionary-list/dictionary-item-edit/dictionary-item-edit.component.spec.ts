import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryItemEditComponent } from './dictionary-item-edit.component';

describe('DictionaryItemEditComponent', () => {
  let component: DictionaryItemEditComponent;
  let fixture: ComponentFixture<DictionaryItemEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DictionaryItemEditComponent]
    });
    fixture = TestBed.createComponent(DictionaryItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
