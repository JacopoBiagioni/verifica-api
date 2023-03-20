import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSerietvComponent } from './item-serietv/item-serietv.component';
import { SearchSerietvComponent } from './search-serietv/search-serietv.component';

const routes: Routes = [
  {path : 'search-serietv', component : SearchSerietvComponent},
  {path : 'item-serietv/:id', component : ItemSerietvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
