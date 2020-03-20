import { Component, OnInit } from '@angular/core';
import { historyToDo} from '../toDo';
import { element } from 'protractor';

@Component({
  selector: 'app-history-to-do-list',
  templateUrl: './history-to-do-list.component.html',
  styleUrls: ['./history-to-do-list.component.css']
})
export class HistoryToDoListComponent implements OnInit {

  toDo = historyToDo;
  constructor() { }

  ngOnInit(): void {
  }



}
