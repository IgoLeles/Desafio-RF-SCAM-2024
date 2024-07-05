import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoService } from 'src/app/services/empregado.service';
import { Empregado } from 'src/app/models/empregado.model';

@Component({
    selector: 'app-edit-empregado',
    templateUrl: './edit-empregado.component.html',
    styleUrls: ['./edit-empregado.component.css']
})
export class EditEmpregadoComponent implements OnInit {
    empregado: Empregado = {
        nome: '',
        email: '',
        cargo: ''
    };

    constructor(
        private empregadoService: EmpregadoService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getEmpregado(this.route.snapshot.params['id']);
    }

    getEmpregado(id: number): void {
        this.empregadoService.getEmpregado(id).subscribe(empregado => {
            this.empregado = empregado;
        });
    }

    updateEmpregado(): void {
        this.empregadoService.updateEmpregado(this.empregado.id!, this.empregado)
            .subscribe(() => this.router.navigate(['/list-empregados']));
    }
}
