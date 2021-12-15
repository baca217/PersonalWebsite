import { Component, OnInit } from '@angular/core';

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

    if(sidebar){sidebar.style.width = "250px";}
    if(main){main.style.width = "250px";}
  }

  closeNav(){
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");

    if(sidebar){sidebar.style.width = "0";}
    if(main){main.style.width = "0";}
  }
}
