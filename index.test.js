require('dotenv').config();
const supertest = require('supertest');
const { describe, test, expect } = require('@jest/globals');
const config = require('./app/config');
const app = require('./server');
const initServer = (app) => {
    app.listen(config.app.testPort, () => {
        console.log(`Server is running for testing on port ${config.app.testPort} 🚢`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Server already existed, no need for re-initialization`);
        } else {
            console.log(err);
        }
    });
}

initServer(app);

describe('Health check', () => {
    test('GET: "/" should return OK', async () => {
        const res = await supertest(app).get("/").set('Accept', 'application/json');
        expect(res.headers["content-type"]).toMatch(/json/);
        expect(res.status).toEqual(200);
        expect(res.body === "OK").toBeTruthy();
    });
})