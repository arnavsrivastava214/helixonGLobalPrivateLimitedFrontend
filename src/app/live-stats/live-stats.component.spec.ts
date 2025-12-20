import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStatsComponent } from './live-stats.component';

describe('LiveStatsComponent', () => {
  let component: LiveStatsComponent;
  let fixture: ComponentFixture<LiveStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
