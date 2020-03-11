import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesToDoComponent } from './features-to-do.component';

describe('FeaturesToDoComponent', () => {
  let component: FeaturesToDoComponent;
  let fixture: ComponentFixture<FeaturesToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
