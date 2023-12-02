import { Component } from '@angular/core';

@Component({
  selector: 'app-registrocitas',
  templateUrl: './registrocitas.component.html',
  styleUrls: ['./registrocitas.component.css']
})
export class RegistrocitasComponent {
showAlert(){
  alert('Se guardo su registro')
}
}
