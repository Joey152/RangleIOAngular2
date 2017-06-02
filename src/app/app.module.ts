import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { CounterComponent } from './component/counter/counter.component';
import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { BetterCounterComponent } from './component/better-counter/better-counter.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    CounterComponent,
    EventBindingComponent,
    BetterCounterComponent,
    TwoWayBindingComponent
  ],
  imports: [
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
