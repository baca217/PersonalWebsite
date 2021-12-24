import { Component, OnInit } from '@angular/core';
import waitForElementTransition from 'wait-for-element-transition';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeActive(callElem: HTMLElement){
    var curActive = document.getElementsByClassName("active")[0];
    if(callElem !== curActive){
      curActive.classList.remove("active");
      callElem.classList.add("active");
    }
  }
}