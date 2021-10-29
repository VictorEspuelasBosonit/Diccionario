import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LinkService } from '../services/link.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEspanolComponent } from '../add-espanol/add-espanol.component';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  ELEMENT_DATA: Data[] = [];
  displayedColumns: string[] = ['Id', 'palabra', 'descripcion', 'actions'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  constructor(public dialog: MatDialog, private conexion: LinkService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEspanolComponent, {
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
    return { palabra: '', desc: '' }
  }

  public insertar() {
    const temp = this.getDataForm();
    if (temp["palabra"]) {
      if (temp['desc']) {
        this.conexion.insert(temp["palabra"], temp['desc'])
          .subscribe();
      }
    }
  }

  public eliminar(item: any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar esta palabra?',
      text: "¡No podras deshacer esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: '¡Si, eliminala!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.conexion.delete(item.palabra)
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
    const dialogo = this.dialog.open(AddEspanolComponent, {
      data: { ...item, editar: true }
    })
    dialogo.afterClosed()
      .subscribe((data) => {
        this.conexion.update(data.palabra, data.descripcion, data.palabraAntigua2)
          .subscribe((data) => {
            this.conexion.getData()
              .subscribe((data) => this.dataSource.data = data as Data[]);
          }, error => {
          })
      })
  }

  public view(item: any) {
    this.dialog.open(AddEspanolComponent, {
      data: { ...item }
    })
  }

  public getAllReports() {
    let resp = this.conexion.getData();
    resp.subscribe(report => this.dataSource.data = report as Data[]);
  }
}