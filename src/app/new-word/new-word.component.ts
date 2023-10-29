import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent {
  constructor(private router:Router){}
  addNew(){
    this.router.navigate(['/dictionary/new']);
  }
}
