const request = require('supertest');
const app = require('../index');
const db = require('../models/db');

describe('Empregado API', () => {
    afterAll(() => {
        db.end();
    });

    it('should create a new empregado', async () => {
        const res = await request(app)
            .post('/api/empregados')
            .send({
                nome: 'Teste',
                email: 'teste@example.com',
                cargo: 'Desenvolvedor'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('insertId');
    });

    it('should get all empregados', async () => {
        const res = await request(app).get('/api/empregados');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should get empregado by id', async () => {
        const res = await request(app).get('/api/empregados/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });

    it('should update an empregado', async () => {
        const res = await request(app)
            .put('/api/empregados/1')
            .send({
                nome: 'Teste Atualizado',
                email: 'teste@example.com',
                cargo: 'Desenvolvedor Senior'
            });
        expect(res.statusCode).toEqual(200);
    });

    it('should delete an empregado', async () => {
        const res = await request(app).delete('/api/empregados/1');
        expect(res.statusCode).toEqual(200);
    });
});
