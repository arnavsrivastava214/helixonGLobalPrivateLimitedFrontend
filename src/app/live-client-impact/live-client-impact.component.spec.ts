import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClientImpactComponent } from './live-client-impact.component';

describe('LiveClientImpactComponent', () => {
  let component: LiveClientImpactComponent;
  let fixture: ComponentFixture<LiveClientImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveClientImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveClientImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
