import { authors } from './../author';
import { Component, importProvidersFrom, Input } from '@angular/core';
import { Author } from '../author';



@Component({
  selector: 'author_list',
  template: '<author_detail *ngFor=" let author of authors" [authorss] = "author" (select)="onSelected($event)">  </author_detail><br> <div>current chose: {{curName.firstName}} {{curName.lastName}}</div>',
  styleUrls: ['./author.component.scss']
})
export class AuthorListComponent {
  authors = authors;
  curName = authors[0];
  onSelected(selectdAu: Author){
    this.curName = selectdAu;
  }
}
