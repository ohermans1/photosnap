import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesGroupComponent } from './stories-group.component';

describe('StoriesGroupComponent', () => {
  let component: StoriesGroupComponent;
  let fixture: ComponentFixture<StoriesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
