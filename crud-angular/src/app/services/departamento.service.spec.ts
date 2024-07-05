import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DepartamentoService } from './departamento.service';
import { Departamento } from './departamento.model';

describe('DepartamentoService', () => {
    let service: DepartamentoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DepartamentoService]
        });
        service = TestBed.inject(DepartamentoService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Verifica que não há requisições pendentes ao final de cada teste
    });

    it('should retrieve all departamentos from the API via GET', () => {
        const dummyDepartamentos: Departamento[] = [
            { id: 1, nome: 'Tecnologia' },
            { id: 2, nome: 'Recursos Humanos' }
        ];

        service.getDepartamentos().subscribe(departamentos => {
            expect(departamentos.length).toBe(2);
            expect(departamentos).toEqual(dummyDepartamentos);
        });

        const request = httpMock.expectOne(`${service.apiUrl}/departamentos`);
        expect(request.request.method).toBe('GET');
        request.flush(dummyDepartamentos);
    });

    // Adicionar mais testes para cobrir cada método no DepartamentoService
});
