import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() checkedd !: boolean;
  //bắt buộc event phải là tên của databind + Change thì ms two way bind được
  @Output() checkeddChange = new EventEmitter<boolean>();
  toggle(){
    this.checkeddChange.emit(!this.checkedd)
  }
}