import { authors } from './../author';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'author_detail',
  template: '<div> {{authorss.firstName}}  {{authorss.lastName}} <br> <button (click)="select.emit(authorss)">select</button></div>',
  styleUrls: ['./author.component.scss']
})
export class AuthorDetailComponent {
  @Input() authorss !: Author;
  @Output() select = new EventEmitter<Author>();
}
