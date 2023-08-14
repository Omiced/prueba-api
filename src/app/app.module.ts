import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormBookComponent } from './components/form-book/form-book.component';
import { ListBookComponent } from './components/list-book/list-book.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBookComponent,
    ListBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
