const fs = require('fs').promises;
//importa o fs para leitura do data - fs é uma função assync
const path = require('path');
//retorna o caminho absoluto 
const readMissionsData = async() => {
  try {
      const data = await fs.readFile(path.resolve(__dirname, '../../data/missions.json'));
      const missions = JSON.parse(data);
      //JSON.parse para traduzir o Buffer retornado do path
      return missions;
  } catch(error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

module.exports = {
  readMissionsData
}