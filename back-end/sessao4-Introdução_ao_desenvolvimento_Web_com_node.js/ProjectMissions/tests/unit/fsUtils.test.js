const { expect } = require('chai');

const sinon = require('sinon');
const fs = require('fs');
const { readMissionsData } = require('../../src/utils/fsUtils');
const { mockMissions } = require('../utils/mockMissions');

describe('A função readMissionsData', function () {
    it('retorna um array com todos os elementos do arquivo JSON', async function () {
        sinon.stub(fs.promises, 'readFile').resolves(mockMissions);
        const missions = await readMissionsData();

        expect(missions).to.be.instanceOf(Array); 
        expect(missions).to.have.lengthOf(3);
        sinon.restore();
    });
});