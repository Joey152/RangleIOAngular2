import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-better-counter',
  templateUrl: './better-counter.component.html',
  styleUrls: ['./better-counter.component.css']
})
export class BetterCounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment(): void {
    this.count++;
    this.countChange.emit(this.count);
  }
}
