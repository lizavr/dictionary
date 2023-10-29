import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DictionaryListComponent } from './dictionary-list/dictionary-list.component';
import { TrainingComponent } from './training/training.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DictionaryListItemComponent } from './dictionary-list/dictionary-list-item/dictionary-list-item.component';
import { DictionaryService } from './dictionary.service';
import { DictionaryItemEditComponent } from './dictionary-list/dictionary-item-edit/dictionary-item-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewWordComponent } from './new-word/new-word.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrainingComponent,
    NotFoundComponent,
    DictionaryListComponent,
    DictionaryListItemComponent,
    DictionaryItemEditComponent,
    NewWordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [DictionaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
