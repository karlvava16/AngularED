import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeWorldComponent } from './see-world/see-world.component';
import { DealsAndDestiantionsComponent } from './deals-and-destiantions/deals-and-destiantions.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeWorldComponent,
    DealsAndDestiantionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
