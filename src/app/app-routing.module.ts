import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';


import { PropertyComponent } from './property/property.component';

const routes: Routes = [{path:'create',component:PropertyComponent },
{path:'list',component:PropertyListComponent},
{path: '',redirectTo:'list',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
