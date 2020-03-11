import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryToDoListComponent } from './history-to-do-list.component';

describe('HistoryToDoListComponent', () => {
  let component: HistoryToDoListComponent;
  let fixture: ComponentFixture<HistoryToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
