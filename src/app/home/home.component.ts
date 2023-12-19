import { Component, OnInit } from '@angular/core';
import { trigger,style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/ activite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations : [
     trigger('animobjectifs' ,[
      transition ( '*=>*' ,[
      query(':enter', style({opacity: 0}), {optional: true}),
      query(':enter', stagger('300ms',[ animate ( '.9s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0, backgroundColor: "lightblue",}), style({opacity: .5, transform: 'translateY(35px)', offset: .3,  backgroundColor: "aero",}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1,  backgroundColor: "airsuperiorityblue",}), ]))]),{optional: true})
    ]) ]),

    trigger('animbutt' ,[
      transition ( '*=>*' ,[
      query(':enter', style({opacity: 0}), {optional: true}),
      query(':enter', stagger('300ms',[ animate ( '.9s ease-in' , keyframes ([
    style({opacity: 0 , offset: 0, backgroundColor: "lightblue",}),
    style({opacity: 1, offset: 1,  backgroundColor: "airsuperiorityblue",}), ]))]),{optional: true})
    ]) ])

  
  ]

})
export class HomeComponent implements OnInit {
  
  nbItems = 4;
  btnText = "Ajouter un item";
  objectifText = "";

  constructor(public monRouteur: Router, public actServ: ActiviteService) { 

  }

  ngOnInit(): void {
    this.nbItems = this.actServ.objectifs.length;
  }

  ajoutItem(el: string): void {
    this.actServ.objectifs.push(el);
    this.nbItems++;
    setTimeout(()=>{this.monRouteur.navigate(['about'])}, 3000);
  }
  getClass(){
    if (this.objectifText == "..."|| this.objectifText == "")
    {
      return true
    }
    else 
    {
      return false
    }

  }


}
