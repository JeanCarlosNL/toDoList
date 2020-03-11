import { Component, OnInit } from '@angular/core';
import { toDo } from '../toDo';

@Component({
  selector: 'app-add-to-do-list',
  templateUrl: './add-to-do-list.component.html',
  styleUrls: ['./add-to-do-list.component.css']
})
export class AddToDoListComponent implements OnInit {

  toDo = toDo;
  constructor() { }

  ngOnInit(): void {
  }

}
