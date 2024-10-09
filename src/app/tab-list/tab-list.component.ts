import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { TabDetailComponent} from '../tab-detail/tab-detail.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})

export class TabListComponent  {
  @ContentChildren(TabDetailComponent) tabList!: QueryList<TabDetailComponent>;
  selectedTab: number = 0;

  ngAfterContentInit() {
    // Initialize with the first tab if available
    if (this.tabList && this.tabList.length) {
      this.selectedTab = 0;
    }
  }

  chooseTab(idx: number) {
    this.selectedTab = idx;
  }
}
