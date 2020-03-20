import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { toDo } from '../toDo';
import { pendingToDo } from '../toDo';

@Component({
  selector: 'app-add-to-do-list',
  templateUrl: './add-to-do-list.component.html',
  styleUrls: ['./add-to-do-list.component.css']
})
export class AddToDoListComponent implements OnInit {

  toDo = toDo;
  pendingToDo = pendingToDo;
  addForm;
  constructor( ) { 
  }

  ngOnInit(): void {
  }

 save(){
   for(let i=0;i<toDo.length;i++){
       pendingToDo.push(toDo[i]);
   }
   window.alert('Anadido a pendientes!');
   this.toDo.splice(0);
 }

}
