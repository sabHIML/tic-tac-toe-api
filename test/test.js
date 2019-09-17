process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../src/app.js');
const conn = require('../src/db/index.js');

describe('Testing API', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    });

    it('Creating a new game', (done) => {
        request(app).post('/api/game')
            .send({
                    board : [
                        [0, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ],
                    moves : [],
                    player : 1
                })
            .then((res) => {

                const body = res.body;
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('board');
                expect(body).to.contain.property('player');
                done();
            })
            .catch((err) => done(err));
    });

    it('API is available.', (done) => {
        request(app).get('/api/')
            .then((res) => {

                const body = JSON.parse(res.status);
                expect(res.status).to.equal(200);
                done();
            })
            .catch((err) => done(err));
    });

})