import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './component/data-binding.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/data-binding',
    pathMatch: 'full'
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
