import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesGroupComponent } from './features-group.component';

describe('FeaturesGroupComponent', () => {
  let component: FeaturesGroupComponent;
  let fixture: ComponentFixture<FeaturesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturesGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
