import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterCounterComponent } from './better-counter.component';

describe('BetterCounterComponent', () => {
  let component: BetterCounterComponent;
  let fixture: ComponentFixture<BetterCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
