import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSerietvComponent } from './search-serietv/search-serietv.component';
import { ItemSerietvComponent } from './item-serietv/item-serietv.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSerietvComponent,
    ItemSerietvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
