import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  push(array, value) {
    array.push(value);
  }

}
