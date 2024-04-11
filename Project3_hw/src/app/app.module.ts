import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { BooksComponent } from './books/books.component';
import { IphoneAppleComponent } from './iphone-apple/iphone-apple.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    BooksComponent,
    IphoneAppleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
