import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LinkService } from '../services/link.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { AddInglesComponent } from '../add-ingles/add-ingles.component';

@Component({
  selector: 'app-contentenglish',
  templateUrl: './contentenglish.component.html',
  styleUrls: ['./contentenglish.component.scss']
})
export class ContentenglishComponent implements OnInit {

  ELEMENT_DATA: Data[] = [];
  displayedColumns: string[] = ['Id', 'palabra', 'palabraEspanol', 'actions'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  constructor(public dialog: MatDialog, private conexion: LinkService, private service: DataService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddInglesComponent, {
      width: '350px',
    });

    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllReports();
      })
  }

  ngOnInit(): void {
    this.getAllReports();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getDataForm() {
    return { palabra: 'a', palabraEspanol: 'b' }
  }

  public insertar() {
    const temp = this.getDataForm();
    this.conexion.insertIngles(temp["palabra"], temp["palabraEspanol"])
      .subscribe();
  }

  public eliminar(item: any) {
    Swal.fire({
      title: '¿Estas seguro de querer eliminarlo?',
      text: "Esta accion no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.conexion.deleteIngles(item.palabra)
          .subscribe(() => this.getAllReports());
        Swal.fire(
          '¡Eliminada!',
          'La palabra ha sido eliminada con exito.',
          'success'
        )
      }
    })

  }

  public updatear(item: any) {
    const dialogo = this.dialog.open(AddInglesComponent, {
      data: { ...item, editar: true }
    })
    dialogo.afterClosed()
      .subscribe((data) => {
        this.conexion.updateIngles(data.palabra, data.palabraEspanol, data.palabraAntigua)
          .subscribe((data) => {
            this.conexion.getDataIngles()
              .subscribe((data) => this.dataSource.data = data as Data[]);
          }, error => {

          })
      })
  }


  public view(item: any) {
    this.dialog.open(AddInglesComponent, {
      data: { ...item }
    })
  }

  public getAllReports() {
    let resp = this.conexion.getDataIngles();
    resp.subscribe(report => this.dataSource.data = report as Data[]);
  }

}