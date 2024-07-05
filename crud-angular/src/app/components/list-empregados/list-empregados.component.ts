import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../../services/empregado.service';
import { Empregado } from '../../models/empregado.model';

@Component({
    selector: 'app-list-empregados',
    templateUrl: './list-empregados.component.html',
    styleUrls: ['./list-empregados.component.css']
})
export class ListEmpregadosComponent implements OnInit {
    empregados: Empregado[] = [];

    constructor(private empregadoService: EmpregadoService) { }

    ngOnInit(): void {
        this.getEmpregados();
    }

    getEmpregados(): void {
        this.empregadoService.getEmpregados()
            .subscribe(empregados => this.empregados = empregados);
    }
}
