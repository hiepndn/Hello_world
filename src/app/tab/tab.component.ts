import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() headerTemplate: TemplateRef<any> | undefined; 
}
