import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/data-binding',
    pathMatch: 'full'
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'two-way-binding',
    component: TwoWayBindingComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
