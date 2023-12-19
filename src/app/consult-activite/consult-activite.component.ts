import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../services/ activite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  paramRecup = ""
  paramRecup2 = ""
  paramId=0
  editMode = false
  currentName = ""
  constructor(private actRoute: ActivatedRoute, public monService: ActiviteService, public monRouteur: Router) {
    this.paramRecup = actRoute.snapshot.params['identif']
    this.paramRecup2 = actRoute.snapshot.params['identifDeux']
    this.paramId = Number(this.paramRecup)
    this.currentName = monService.objectifs[this.paramId]

  }

  ngOnInit(): void {
  }
  removeElem(num: number){
    this.monService.removeItem(num)
    this.monRouteur.navigate(['index.html']);
  }
  switchEdit(){
    this.editMode = !this.editMode
    if ( !this.editMode  ){
      this.monService.editItem(this.paramId, this.currentName)
    }
  }
}
