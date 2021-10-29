import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.component.html',
  styleUrls: ['./ingles.component.scss']
})
export class InglesComponent implements OnInit {

  constructor(
    private _ac: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this._ac.snapshot.data.id);
    
  }

}
