import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  imports: [ReactiveFormsModule],
  templateUrl: './tarjeta-credito.html',
  styleUrl: './tarjeta-credito.css'
})
export class TarjetaCredito implements OnInit {

  listarTarjetas: any[] = [
    { titular: 'Yesika Simijaca', numeroTarjeta: '6757234846868678', fechaExpiracion: '11/24', cvv: '123' },
    { titular: 'Liliana Beltrán', numeroTarjeta: '6757234846868678', fechaExpiracion: '11/24', cvv: '876' },
    { titular: 'Simón Padrón', numeroTarjeta: '68765434565445678', fechaExpiracion: '12/26', cvv: '456' },
    { titular: 'Andrés Gaviria', numeroTarjeta: '787664574636777', fechaExpiracion: '12/26', cvv: '876' }
  ];

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.formulario = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarTarjeta() {
    if (this.formulario.valid) {
      const tarjeta: any = {
        titular: this.formulario.get('titular')?.value,
        numeroTarjeta: this.formulario.get('numeroTarjeta')?.value,
        fechaExpiracion: this.formulario.get('fechaExpiracion')?.value,
        cvv: this.formulario.get('cvv')?.value
      };

      this.listarTarjetas.push(tarjeta);
      this.formulario.reset();
      this.toastr.success('Tarjeta agregada exitosamente', 'Éxito');
    } else {
      this.toastr.error('Por favor complete todos los campos correctamente', 'Error');
    }
  }

  eliminarTarjeta(index: number) {
    this.listarTarjetas.splice(index, 1)
    this.toastr.error('La tarjeta se eliminó con éxito!', 'Tarjeta Eliminada!')

  }

}
