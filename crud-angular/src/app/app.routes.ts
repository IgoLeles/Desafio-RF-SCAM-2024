import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpregadosComponent } from './components/list-empregados/list-empregados.component';
import { CreateEmpregadoComponent } from './components/create-empregado/create-empregado.component';
import { EditEmpregadoComponent } from './components/edit-empregado/edit-empregado.component';
import { ViewEmpregadoComponent } from './components/view-empregado/view-empregado.component';
import { ListDepartamentosComponent } from './components/list-departamentos/list-departamentos.component';
import { CreateDepartamentoComponent } from './components/create-departamento/create-departamento.component';
import { EditDepartamentoComponent } from './components/edit-departamento/edit-departamento.component';
import { ViewDepartamentoComponent } from './components/view-departamento/view-departamento.component';

const routes: Routes = [
    { path: '', redirectTo: '/list-empregados', pathMatch: 'full' },
    { path: 'list-empregados', component: ListEmpregadosComponent },
    { path: 'create-empregado', component: CreateEmpregadoComponent },
    { path: 'edit-empregado/:id', component: EditEmpregadoComponent },
    { path: 'view-empregado/:id', component: ViewEmpregadoComponent },
    { path: 'list-departamentos', component: ListDepartamentosComponent },
    { path: 'create-departamento', component: CreateDepartamentoComponent },
    { path: 'edit-departamento/:id', component: EditDepartamentoComponent },
    { path: 'view-departamento/:id', component: ViewDepartamentoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
