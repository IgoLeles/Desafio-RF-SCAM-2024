import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListEmpregadosComponent } from './components/list-empregados/list-empregados.component';
import { CreateEmpregadoComponent } from './components/create-empregado/create-empregado.component';
import { EditEmpregadoComponent } from './components/edit-empregado/edit-empregado.component';
import { ViewEmpregadoComponent } from './components/view-empregado/view-empregado.component';
import { ListDepartamentosComponent } from './components/list-departamentos/list-departamentos.component';
import { CreateDepartamentoComponent } from './components/create-departamento/create-departamento.component';
import { EditDepartamentoComponent } from './components/edit-departamento/edit-departamento.component';
import { ViewDepartamentoComponent } from './components/view-departamento/view-departamento.component';

import { DepartamentoService } from './services/departamento.service';


@NgModule({
    declarations: [
        AppComponent,
        ListEmpregadosComponent,
        CreateEmpregadoComponent,
        EditEmpregadoComponent,
        ViewEmpregadoComponent,
        ListDepartamentosComponent,
        CreateDepartamentoComponent,
        EditDepartamentoComponent,
        ViewDepartamentoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [DepartamentoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
