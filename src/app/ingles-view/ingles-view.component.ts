import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-ingles-view',
  templateUrl: './ingles-view.component.html',
  styleUrls: ['./ingles-view.component.scss']
})
export class InglesViewComponent implements OnInit {

  public objetoIngles: any;
  public palabra: string = "";

  constructor(
    private service: LinkService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.palabra = params.palabra;
        this.getWordData(this.palabra);
      })
  }

  private getWordData(palabra: string){
    this.service.getObjectViewIngles(palabra)
    .subscribe(data =>{
      this.objetoIngles = data
      console.log(this.objetoIngles);
    })    
  }


}
