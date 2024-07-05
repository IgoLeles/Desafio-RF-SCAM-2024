import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empregado } from '../models/empregado.model';

@Injectable({
    providedIn: 'root'
})
export class EmpregadoService {
    private apiUrl = 'http://localhost:3000/api/empregados';

    constructor(private http: HttpClient) { }

    getEmpregados(): Observable<Empregado[]> {
        return this.http.get<Empregado[]>(this.apiUrl);
    }

    getEmpregado(id: number): Observable<Empregado> {
        return this.http.get<Empregado>(`${this.apiUrl}/${id}`);
    }

    createEmpregado(empregado: Empregado): Observable<Empregado> {
        return this.http.post<Empregado>(this.apiUrl, empregado);
    }

    updateEmpregado(id: number, empregado: Empregado): Observable<Empregado> {
        return this.http.put<Empregado>(`${this.apiUrl}/${id}`, empregado);
    }

    deleteEmpregado(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
