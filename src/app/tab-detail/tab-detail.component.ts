import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabListComponent } from '../tab-list/tab-list.component';

@Component({
  selector: 'app-tab-detail',
  templateUrl: './tab-detail.component.html',
  styleUrls: ['./tab-detail.component.scss']
})

export class TabDetailComponent  {
  @Input() title !: string;
  @ViewChild(TemplateRef) viewss !: TemplateRef<unknown>;
  constructor(private tabList: TabListComponent) {}

  ngOnInit() {
    this.tabList.addTabList(this);
  }
}


