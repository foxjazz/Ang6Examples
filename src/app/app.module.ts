import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from '@angular/router';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent},{ path: 'toc', component: TableOfContentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TableOfContentsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
