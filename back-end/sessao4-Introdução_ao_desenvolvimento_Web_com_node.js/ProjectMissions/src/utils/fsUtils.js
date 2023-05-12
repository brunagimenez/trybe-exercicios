const fs = require('fs').promises;
//importa o fs para leitura do data - fs é uma função assync
const path = require('path');
//retorna o caminho absoluto 

const MISSION_DATA_PATH = '../../data/missions.json';
//const salva para um código mais limpo

const readMissionsData = async() => {
  try {
      const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
      const missions = JSON.parse(data);
      //JSON.parse para traduzir o Buffer retornado do path
      return missions;
  } catch(error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

//adicionar dados no data
const writeNewMissinData = async(newMission) => {
    try {
        const oldMissions = await readMissionsData();
        const allMissions = JSON.stringify([...oldMissions, newMission])

        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions)
    } catch (error) {
      console.error(`Erro na leitura do arquivo: ${error}`);
    }
}

module.exports = {
  readMissionsData,
  writeNewMissinData
}