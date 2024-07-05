import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpregadoService } from './empregado.service';
import { Empregado } from '../models/empregado.model';

describe('EmpregadoService', () => {
    let service: EmpregadoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EmpregadoService]
        });
        service = TestBed.inject(EmpregadoService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch empregados', () => {
        const dummyEmpregados: Empregado[] = [
            { id: 1, nome: 'John', email: 'john@example.com', cargo: 'Developer' },
            { id: 2, nome: 'Doe', email: 'doe@example.com', cargo: 'Tester' }
        ];

        service.getEmpregados().subscribe(empregados => {
            expect(empregados.length).toBe(2);
            expect(empregados).toEqual(dummyEmpregados);
        });

        const req = httpMock.expectOne(`${service.apiUrl}`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyEmpregados);
    });

    it('should fetch a single empregado by id', () => {
        const dummyEmpregado: Empregado = { id: 1, nome: 'John', email: 'john@example.com', cargo: 'Developer' };

        service.getEmpregado(1).subscribe(empregado => {
            expect(empregado).toEqual(dummyEmpregado);
        });

        const req = httpMock.expectOne(`${service.apiUrl}/1`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyEmpregado);
    });

    it('should create a new empregado', () => {
        const newEmpregado: Empregado = { id: 3, nome: 'Anna', email: 'anna@example.com', cargo: 'Manager' };

        service.createEmpregado(newEmpregado).subscribe(empregado => {
            expect(empregado).toEqual(newEmpregado);
        });

        const req = httpMock.expectOne(service.apiUrl);
        expect(req.request.method).toBe('POST');
        req.flush(newEmpregado);
    });

    it('should update an empregado', () => {
        const updatedEmpregado: Empregado = { id: 1, nome: 'John Updated', email: 'john.updated@example.com', cargo: 'Senior Developer' };

        service.updateEmpregado(updatedEmpregado.id!, updatedEmpregado).subscribe(empregado => {
            expect(empregado).toEqual(updatedEmpregado);
        });

        const req = httpMock.expectOne(`${service.apiUrl}/1`);
        expect(req.request.method).toBe('PUT');
        req.flush(updatedEmpregado);
    });

    it('should delete an empregado', () => {
        service.deleteEmpregado(1).subscribe(response => {
            expect(response).toBeNull();
        });

        const req = httpMock.expectOne(`${service.apiUrl}/1`);
        expect(req.request.method).toBe('DELETE');
        req.flush(null);
    });
});
