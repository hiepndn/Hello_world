import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabDetailComponent} from '../tab-detail/tab-detail.component';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})

export class TabListComponent  {
  tabList : TabDetailComponent [] = [];
  curIndex: number = 0;

  chose(index:number){
    this.curIndex = index;
  }

  addTabList(tab: TabDetailComponent){
    this.tabList.push(tab);
  }
}
