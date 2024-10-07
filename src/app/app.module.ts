import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author/author_list.component';
import { AuthorDetailComponent } from './author/author_detail.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabComponent } from './tab/tab.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabDetailComponent } from './tab-detail/tab-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    TabComponent,
    TabListComponent,
    TabDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
