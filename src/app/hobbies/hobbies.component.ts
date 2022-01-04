import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getBusterAge() {
    let diff = new Date()
    let busterAge = new Date();
    busterAge.setFullYear(2021);
    busterAge.setMonth(5);
    busterAge.setDate(25);

    diff.setFullYear(diff.getFullYear() - busterAge.getFullYear());
    diff.setMonth(diff.getMonth() - busterAge.getMonth());
    diff.setDate(diff.getDate() - busterAge.getDate());
    console.log(diff.getFullYear());
    let ret = "";

    if (diff.getFullYear() > 0) {
      console.log(diff.getFullYear());
      if(diff.getFullYear() === 1){ret += diff.getFullYear() + " year and ";}
      else{ret += diff.getFullYear() + " years and ";}
    }
    if (diff.getMonth() > 0) {
      if(diff.getMonth() === 1){ret += diff.getMonth() + " month old";}
      else{ret += diff.getMonth() + " months old";}
    }
    return ret;
  }

}
