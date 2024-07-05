import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpregadoService } from 'src/app/services/empregado.service';
import { Empregado } from 'src/app/models/empregado.model';

@Component({
    selector: 'app-view-empregado',
    templateUrl: './view-empregado.component.html',
    styleUrls: ['./view-empregado.component.css']
})
export class ViewEmpregadoComponent implements OnInit {
    empregado: Empregado | undefined;

    constructor(
        private empregadoService: EmpregadoService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getEmpregado(this.route.snapshot.params['id']);
    }

    getEmpregado(id: number): void {
        this.empregadoService.getEmpregado(id).subscribe(empregado => {
            this.empregado = empregado;
        });
    }
}
