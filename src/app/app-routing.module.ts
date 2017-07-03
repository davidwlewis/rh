import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { HouseholdViewComponent } from "./households/household-view/household-view.component";
import { HouseholdAddComponent } from "./households/household-add/household-add.component";
import { SearchComponent } from "./households/search/search.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'household/search', component: SearchComponent },
  { path: 'household/add', component: HouseholdAddComponent },
  { path: 'household/:id', component: HouseholdViewComponent },
  { path: '', children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
