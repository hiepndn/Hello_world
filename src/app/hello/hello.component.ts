import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  @Input() name: string= ""; //new AppComponent().user.name;(dùng thì phải import thêm component vào giống dòng 2)
  @Input() hidden: boolean = true;
}
