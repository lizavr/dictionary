import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DictionaryListComponent } from './dictionary-list/dictionary-list.component';
import { TrainingComponent } from './training/training.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DictionaryItemEditComponent } from './dictionary-list/dictionary-item-edit/dictionary-item-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dictionary', component: DictionaryListComponent },
  { path: 'dictionary/:id', component: DictionaryItemEditComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
