import { Component, OnInit } from '@angular/core';
import { toDo } from '../toDo';

@Component({
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  
  toDo = toDo;
  constructor() { }

  ngOnInit(): void {
  }

  push(value) {
    let number=toDo.length+1;
    toDo.push(` ${value} ${number}`);
  }

  add(){
    window.alert('boton funciona');
  }

}
