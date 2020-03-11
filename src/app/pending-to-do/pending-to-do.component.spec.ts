import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingToDoComponent } from './pending-to-do.component';

describe('PendingToDoComponent', () => {
  let component: PendingToDoComponent;
  let fixture: ComponentFixture<PendingToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
