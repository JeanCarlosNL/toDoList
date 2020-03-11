import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingToDoListComponent } from './pending-to-do-list.component';

describe('PendingToDoListComponent', () => {
  let component: PendingToDoListComponent;
  let fixture: ComponentFixture<PendingToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
