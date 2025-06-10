import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from '../../services/tarjeta/tarjeta-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tarjeta-credito.html',
  styleUrl: './tarjeta-credito.css'
})
export class TarjetaCredito implements OnInit {

  listarTarjetas: any[] = [];
  accion = "agregar";
  id: number | undefined;

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService
  ) {
    this.formulario = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
    this.obtenerTarjetas()
  }

  obtenerTarjetas() {
    this._tarjetaService.getListTarjeta().subscribe(data => {
      console.log(data)
      this.listarTarjetas = data;
    }, error => {
      console.log(error)
    })
  }

  guardarTarjeta() {
    if (this.formulario.valid) {
      const tarjeta: any = {
        titular: this.formulario.get('titular')?.value,
        numeroTarjeta: this.formulario.get('numeroTarjeta')?.value,
        fechaExpiracion: this.formulario.get('fechaExpiracion')?.value,
        cvv: this.formulario.get('cvv')?.value
      }

      if (this.id == undefined) {
        //this.listarTarjetas.push(tarjeta);
        this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
          this.formulario.reset();
          this.toastr.success('Tarjeta agregada exitosamente', 'Éxito');
        }, error => {
          this.toastr.error("Opss ... ocurrió un error", "Error")
          console.log(error)
        })

      } else {
        //Editamos tarjeta
        tarjeta.id = this.id
        this._tarjetaService.updateTarjeta(this.id, tarjeta).subscribe(data => {
          this.formulario.reset()
          this.accion = 'Agregar'
          this.id = undefined
          this.toastr.info('La tarjeta fue actuaizada con éxito!', 'Tarjeta Actualizada')
          this.obtenerTarjetas()
        }, error => {
          console.log(error)
        })
      }
    }
  }

  eliminarTarjeta(id: number) {
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
      this.toastr.error('La tarjeta se eliminó con éxito!', 'Tarjeta Eliminada!')
      this.obtenerTarjetas();
    }, error => {
      console.log(error)
    })
  }

  editarTarjeta(tarjeta: any) {
    this.accion = "Editar";
    this.id = tarjeta.id;

    this.formulario.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })
  }


}


