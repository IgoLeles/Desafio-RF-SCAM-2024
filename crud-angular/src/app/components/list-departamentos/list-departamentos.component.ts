import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../models/departamento.model';

@Component({
    selector: 'app-list-departamentos',
    templateUrl: './list-departamentos.component.html',
    styleUrls: ['./list-departamentos.component.css']
})
export class ListDepartamentosComponent implements OnInit {
    departamentos: Departamento[] = [];

    constructor(private departamentoService: DepartamentoService) { }

    ngOnInit(): void {
        this.getDepartamentos();
    }

    getDepartamentos(): void {
        this.departamentoService.getDepartamentos()
            .subscribe(departamentos => this.departamentos = departamentos);
    }
}
