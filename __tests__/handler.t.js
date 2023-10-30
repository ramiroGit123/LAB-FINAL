import { index, holaMundo, holaNombre } from '../routes/default.js';

describe('Test Handlers', () => {
    test('responde a /', () => {
        const req = {};
        const res = {
            text: '',
            send: function (input) { this.text = input }
        };
        index(req, res)

        expect(res.text).toEqual("Index");
    });

    test('responde a /holaMundo', () => {
        const req = {};
        const res = {
            text: '',
            send: function (input) { this.text = input }
        };
        holaMundo(req, res)

        expect(res.text).toEqual("Hola Mundo!");
    });

    test('responde a /hola/:name', () => {
        const req = { params: { name: 'Diego' } };
        const res = {
            text: '',
            send: function (input) { this.text = input }
        };
        holaNombre(req, res)

        expect(res.text).toEqual("Hola Diego");
    });
});