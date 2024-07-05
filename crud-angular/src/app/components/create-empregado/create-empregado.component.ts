import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpregadoService } from '../../services/empregado.service';
import { Empregado } from '../../models/empregado.model';

@Component({
    selector: 'app-create-empregado',
    templateUrl: './create-empregado.component.html',
    styleUrls: ['./create-empregado.component.css']
})
export class CreateEmpregadoComponent {
    empregado: Empregado = {
        nome: '',
        email: '',
        cargo: ''
    };

    constructor(private empregadoService: EmpregadoService, private router: Router) { }

    createEmpregado(): void {
        this.empregadoService.createEmpregado(this.empregado)
            .subscribe(() => this.router.navigate(['/list-empregados']));
    }
}
