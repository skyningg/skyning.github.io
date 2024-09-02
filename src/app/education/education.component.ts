import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Array<any> = [];

  ngOnInit(): void {
    let education = {
      fecha: "2022-2026",
      institucion: "Universidad Veracruzana",
      ubicacion: "Ixtaczoquitlán, Ver.",
      grado: "Licenciatura",
      campoEstudio: "Ingeniería de Software",
      logros: [
        { descripcion: "Estudiante de Ingeniería de software" }
      ]
    };

    this.educationList.push(education);
    console.log(this.educationList); // Asegúrate de imprimir la lista correcta
  }
}
