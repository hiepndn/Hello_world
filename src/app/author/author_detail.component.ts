import { authors } from './../author';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'author_detail',
  templateUrl: './author_detail.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorDetailComponent {
  @Input() authorss !: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() del = new EventEmitter<Author>();
}
