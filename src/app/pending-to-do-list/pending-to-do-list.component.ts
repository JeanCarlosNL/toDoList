import { pendingToDo } from '../toDo';
import { historyToDo} from '../toDo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-to-do-list',
  templateUrl: './pending-to-do-list.component.html',
  styleUrls: ['./pending-to-do-list.component.css']
})
export class PendingToDoListComponent implements OnInit {

  toDo = pendingToDo;
  completedTodo = [];
  historyToDo = historyToDo;
  constructor() { }

  ngOnInit(): void {
  }

  onClic(id){
     let element = document.getElementById(id);
     element.style.background = "yellow";
     this.completedTodo.push(id);
}

completeClick(){
  for(let i =0; i<this.completedTodo.length; i++){
    this.historyToDo.push(this.completedTodo[i]);
    let index = this.toDo.indexOf(this.completedTodo[i]);
    this.toDo.splice(index,index+1)
  }
  window.alert("Tarea terminada, anadida al historial");
}
}
