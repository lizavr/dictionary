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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrainingComponent,
    NotFoundComponent,
    DictionaryListComponent,
    DictionaryListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DictionaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
