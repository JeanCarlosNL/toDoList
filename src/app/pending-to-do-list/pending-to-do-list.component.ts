import { pendingToDo } from '../toDo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-to-do-list',
  templateUrl: './pending-to-do-list.component.html',
  styleUrls: ['./pending-to-do-list.component.css']
})
export class PendingToDoListComponent implements OnInit {

  toDo = pendingToDo;
  constructor() { }

  ngOnInit(): void {
  }
}
