import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrarcitas',
  templateUrl: './mostrarcitas.component.html',
  styleUrls: ['./mostrarcitas.component.css']
})
export class MostrarcitasComponent implements OnInit{
  citas: any[] = [
    { id: 1, cedula: 13172893, nombres: 'Maria Carmen Navarrete Cobeña', ciudad: 'Quito', estado: 'Atendido', doctor: 'dr1', tipo: 'Medicina general', descripcion: 'Descripción del paciente 1' },
    { id: 2, cedula: 12345678, nombres: 'Juan Pérez', ciudad: 'Portoviejo', estado: 'Pendiente', doctor: 'dr2', tipo: 'Pediatría', descripcion: 'Descripción del paciente 2' },
    // Agrega más citas según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editarCita(cita: any): void {
    // Implementa la lógica para la edición de la cita
    console.log('Editar cita:', cita);
  }

  eliminarCita(citaId: number): void {
    // Implementa la lógica para eliminar la cita
    console.log('Eliminar cita con ID:', citaId);
    this.citas = this.citas.filter(c => c.id !== citaId);
  }
}
