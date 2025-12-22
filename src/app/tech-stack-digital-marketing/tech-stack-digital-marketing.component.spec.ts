import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackDigitalMarketingComponent } from './tech-stack-digital-marketing.component';

describe('TechStackDigitalMarketingComponent', () => {
  let component: TechStackDigitalMarketingComponent;
  let fixture: ComponentFixture<TechStackDigitalMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackDigitalMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackDigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
