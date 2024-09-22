import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
        workExperience : Array<any> = [];
        ngOnInit(): void{
                let work1 = {
                        fecha: "2022-2026",
                        ubicacion: "Ixtac, Ver.",
                        puesto: "CEO",
                        empresa:"Wavr Lab",
                        logros : [
                                { descripcion: "mayor fan de Jake de la historia" },
                                { descripcion: "mejor nindungie" }
                        ]
                };



        }
}

