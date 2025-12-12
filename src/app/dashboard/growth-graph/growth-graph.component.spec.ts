import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthGraphComponent } from './growth-graph.component';

describe('GrowthGraphComponent', () => {
  let component: GrowthGraphComponent;
  let fixture: ComponentFixture<GrowthGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
