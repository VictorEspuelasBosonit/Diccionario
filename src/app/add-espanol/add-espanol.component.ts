import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkService } from '../services/link.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { DataService } from '../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-espanol',
  templateUrl: './add-espanol.component.html',
  styleUrls: ['./add-espanol.component.scss']
})
export class AddEspanolComponent implements OnInit {

  public profileForm: FormGroup = this.fb.group({
    palabra: [this.data ? this.data.palabra : '', Validators.required],
    descripcion: [this.data ? this.data.descripcion : '', Validators.required],
  });

  private palabraAntigua2: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEspanolComponent>,
    private fb: FormBuilder,
    private service: LinkService,
    private service2: DataService
  ) { }

  ngOnInit(): void {
    if(this.data && !this.data.editar){
    this.profileForm.get('palabra')?.disable();
    this.profileForm.get('descripcion')?.disable();
    }
    this.palabraAntigua2 = this.profileForm.get('palabra')?.value;

  }

  public saveFormInsert() {
    const a = this.profileForm.get('palabra')?.value
    const b = this.profileForm.get('descripcion')?.value

    if(a && b){
    this.service.insert(a, b)
      .subscribe(data => {
        this.dialogRef.close();

        swal.fire(
          'Perfecto!',
          'Palabra añadida con exito!',
          'success'
        );
      }, error => {
        console.error('error', error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      })
    }
  }
  

  public saveFormUpdate() {
    const palabra = this.profileForm.get('palabra')?.value
    const descripcion = this.profileForm.get('descripcion')?.value

    this.dialogRef.close({palabra, descripcion, palabraAntigua2:this.palabraAntigua2})
  }

}


