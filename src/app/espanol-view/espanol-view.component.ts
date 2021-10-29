import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-espanol-view',
  templateUrl: './espanol-view.component.html',
  styleUrls: ['./espanol-view.component.scss']
})
export class EspanolViewComponent implements OnInit {

  public objetoEspanol: any;
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

  public fecha: any;
  private getWordData(palabra: string) {
    this.service.getObjectViewEspanol(palabra)
      .subscribe((data: any) => {
        this.objetoEspanol = data
        this.fecha = new Date(data.fechaAlta).toLocaleDateString()
      })
  }


}
