import request from 'supertest';
import express from 'express';
import router from '../routes/main.js';

const app = new express();

app.use('/', router);

describe('Mis rutas', () => {
    test('responde a /', async () => {
        const res = await request(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Index");
    });

    test('responde a /holaMundo', async () => {
        const res = await request(app).get('/holaMundo');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hola Mundo!");
    });

    test('responde a /hola/:name', async () => {
        const name = "DiegoTest";
        const res = await request(app).get(`/hola/${name}`);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe(`Hola ${name}`);
    });
});
