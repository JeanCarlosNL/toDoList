import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryToDoComponent } from './history-to-do.component';

describe('HistoryToDoComponent', () => {
  let component: HistoryToDoComponent;
  let fixture: ComponentFixture<HistoryToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
