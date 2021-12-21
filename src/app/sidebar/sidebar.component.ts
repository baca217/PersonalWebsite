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

  openNav(){
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    var blackout = document.getElementById("blackout");

    if(sidebar){sidebar.style.width = "250px";}
    if(main){main.style.width = "250px";}
    if(blackout){
      blackout.style.transition = "0s";
      blackout.style.height = "100%";
      blackout.style.width = "100%";
      blackout.style.zIndex = "98";
      waitForElementTransition(blackout).then(() => {
        if(blackout)
        {
          blackout.style.transition = "1s";
          blackout.style.opacity = "20%";
        }

      })
      
    }
  }

  closeNav(){
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    var blackout = document.getElementById("blackout");

    if(sidebar){sidebar.style.width = "0";}
    if(main){main.style.width = "0";}
    if(blackout){
      blackout.style.transition = "0.2s";
      blackout.style.opacity = "0%"
      blackout.style.zIndex = "0";
      waitForElementTransition(blackout).then(() => {
        if(blackout){
          blackout.style.width = "0%";
          blackout.style.height = "0%";
        }
      })
    }

  }
}
