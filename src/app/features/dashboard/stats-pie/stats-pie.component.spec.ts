import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPieComponent } from './stats-pie.component';

describe('StatsPieComponent', () => {
  let component: StatsPieComponent;
  let fixture: ComponentFixture<StatsPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
