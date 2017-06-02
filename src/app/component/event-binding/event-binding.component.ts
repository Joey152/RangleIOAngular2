import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnChanges {
  num: number = 0;
  parentCount: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    for (let property in changes) {
      console.log(property + ' ' + changes[property].currentValue);
    }
  }
}
