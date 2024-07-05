import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../models/departamento.model';

@Component({
    selector: 'app-view-departamento',
    templateUrl: './view-departamento.component.html',
    styleUrls: ['./view-departamento.component.css']
})
export class ViewDepartamentoComponent implements OnInit {
    departamento: Departamento | undefined;

    constructor(
        private departamentoService: DepartamentoService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getDepartamento(this.route.snapshot.params['id']);
    }

    getDepartamento(id: number): void {
        this.departamentoService.getDepartamento(id).subscribe(departamento => {
            this.departamento = departamento;
        });
    }
}
