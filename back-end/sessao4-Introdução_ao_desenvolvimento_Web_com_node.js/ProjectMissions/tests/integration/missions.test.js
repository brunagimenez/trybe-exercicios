const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');
const { mockMissions } = require('../utils/mockMissions');

describe('Rota de missões', function () {
    describe('GET /missions', function () {
        it('Retorna uma lista de missões', async function () {
            sinon.stub(fs.promises, 'readFile').resolves(mockMissions);

            const response = await chai.request(app).get('/missions');
            
            expect(response.status).to.be.equal(200); 
            expect(response.body).to.haveOwnProperty('missions'); 
            expect(response.body.missions).to.be.instanceOf(Array);
            expect(response.body.missions).to.have.lengthOf(3);
            sinon.restore();
        });
    });
    describe('POST /missions', function () {
        beforeEach(function () {
            sinon.stub(fs.promises, 'writeFile').resolves();
        });
        
        afterEach(sinon.restore);

        const mockMission = {
            name: 'Trybe',
            year: '2022',
            country: 'Brasil',
            destination: 'Titã',
        };

        it('Retorna a missão criada com um id', async function () {
            const response = await chai.request(app).post('/missions').send(mockMission);
            
            expect(response.status).to.be.equal(201); 
            expect(response.body).to.haveOwnProperty('missions'); 
            expect(response.body.missions).to.haveOwnProperty('id'); 
            expect(response.body.missions.name).to.equal(mockMission.name);
            expect(response.body.missions.year).to.equal(mockMission.year);
            expect(response.body.missions.country).to.equal(mockMission.country);
            expect(response.body.missions.destination).to.equal(mockMission.destination);
            sinon.restore();
        });
        
        it('Escreva a nova missão no arquivo de missão', async function () {
            await chai.request(app).post('/missions').send(mockMissions);
            expect(fs.promises.writeFile.called).to.be.equal(true);
            sinon.restore();
        });
    });
});