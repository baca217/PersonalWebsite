import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  page:string = "";

  constructor() { }

  ngOnInit(): void {
    this.page = window.location.pathname;
  }

}
