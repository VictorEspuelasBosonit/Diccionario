import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkService } from '../services/link.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { DataService } from '../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ingles',
  templateUrl: './add-ingles.component.html',
  styleUrls: ['./add-ingles.component.scss']
})
export class AddInglesComponent implements OnInit {

  public profileForm: FormGroup = this.fb.group({
    palabra: [this.data ? this.data.palabra : '', Validators.required],
    palabraEspanol: [this.data ? this.data.palabraEspanol : '', Validators.required],
  });

  private palabraAntigua: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddInglesComponent>,
    private fb: FormBuilder,
    private service: LinkService,
    private service2: DataService
  ) { }

  ngOnInit(): void {
    if (this.data && !this.data.editar) {
      this.profileForm.get('palabra')?.disable();
      this.profileForm.get('palabraEspanol')?.disable();
    }

    this.palabraAntigua = this.profileForm.get('palabra')?.value;
  }

  public saveFormInsert() {
    const a = this.profileForm.get('palabra')?.value
    const b = this.profileForm.get('palabraEspanol')?.value



    this.service.insertIngles(a, b)
      .subscribe(data => {
        this.dialogRef.close();

        swal.fire(
          'Perfecto!',
          'Palabra añadida con exito!',
          'success'
        );
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: 'La palabra que has intentado añadir no esta en el diccionario de español ' + '<a href="http://localhost:4200/espanol">añadela aqui</a>',
        })
      })
  }

  public saveFormUpdate() {
    const palabra = this.profileForm.get('palabra')?.value
    const palabraEspanol = this.profileForm.get('palabraEspanol')?.value
    
    this.dialogRef.close({ palabra, palabraEspanol, palabraAntigua:this.palabraAntigua})
  }

}


