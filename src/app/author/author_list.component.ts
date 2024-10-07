import { authors } from './../author';
import { Component, importProvidersFrom, Input } from '@angular/core';
import { Author } from '../author';



@Component({
  selector: 'author_list',
  templateUrl: './author_list.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorListComponent {
  authors = authors;
  curName = authors[0];
  onSelected(selectdAu: Author){
    this.curName = selectdAu;
  }
  Delete(author: Author){
    this.authors = authors.filter(au=>au.id != author.id)
    if(this.curName.id == author.id){
      this.curName = this.authors[0];
    }
  }
}
