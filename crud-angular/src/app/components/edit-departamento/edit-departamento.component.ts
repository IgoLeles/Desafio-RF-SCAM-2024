import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/models/departamento.model';

@Component({
    selector: 'app-edit-departamento',
    templateUrl: './edit-departamento.component.html',
    styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent implements OnInit {
    departamento: Departamento = {
        nome: ''
    };

    constructor(
        private departamentoService: DepartamentoService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getDepartamento(this.route.snapshot.params['id']);
    }

    getDepartamento(id: number): void {
        this.departamentoService.getDepartamento(id).subscribe((departamento: Departamento) => {
            this.departamento = departamento;
        });
    }

    updateDepartamento(): void {
        this.departamentoService.updateDepartamento(this.departamento.id!, this.departamento)
            .subscribe(() => this.router.navigate(['/list-departamentos']));
    }
}
