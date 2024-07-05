import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento.model';

@Component({
    selector: 'app-create-departamento',
    templateUrl: './create-departamento.component.html',
    styleUrls: ['./create-departamento.component.css']
})
export class CreateDepartamentoComponent {
    departamento: Departamento = {
        nome: ''
    };

    constructor(private departamentoService: DepartamentoService, private router: Router) { }

    createDepartamento(): void {
        this.departamentoService.createDepartamento(this.departamento)
            .subscribe(() => this.router.navigate(['/list-departamentos']));
    }
}
