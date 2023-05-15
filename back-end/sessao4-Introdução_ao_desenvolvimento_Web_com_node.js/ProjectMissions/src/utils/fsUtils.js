const fs = require('fs').promises;
// importa o fs para leitura do data - fs é uma função assync
const path = require('path');
// retorna o caminho absoluto 

const MISSION_DATA_PATH = '../../data/missions.json';
// const salva para um código mais limpo

const readMissionsData = async () => {
  try {
      const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
      const missions = JSON.parse(data);
      // JSON.parse para traduzir o Buffer retornado do path
    return missions;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
};

// adicionar dados no data
const writeNewMissinData = async (newMission) => {
    try {
        const oldMissions = await readMissionsData();
        const newMissionWithId = { id: (oldMissions.length + 1), ...newMission };
        const allMissions = JSON.stringify([...oldMissions, newMissionWithId]);
        // id: Date.now() data de agora
        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions);
        return newMissionWithId;
    } catch (error) {
      console.error(`Erro na leitura do arquivo: ${error}`);
    }
};

// atualiza dado existente pelo id
const updateMissionData = async (id, updatedMissionData) => {
 const oldMissions = await readMissionsData();
 const updatedMission = { id, ...updatedMissionData };
 const updatedMissions = oldMissions.reduce((missionsList, currentMission) => {
  if (currentMission.id === updatedMission.id) return [...missionsList, updatedMission];
  return [...missionsList, currentMission];
 }, []);

 const updatedData = JSON.stringify(updatedMissions);
 try {
  await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData);
  console.log(`Atualizou missão com o id ${id}`);
  return updatedMission;
 } catch (error) {
  console.error(`Èrro na escrita do arquivo: ${error}`);
 }
};

// exclui dado existente
const deleteMissionData = async (id) => {
  const oldMissions = await readMissionsData();
  const deleteMission = oldMissions.filter((currentMission) => currentMission.id !== id);
 
  const updatedData = JSON.stringify(deleteMission);
  try {
   await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData);
   console.log(`Atualizou missão com o id ${id}`);
  } catch (error) {
   console.error(`Èrro na escrita do arquivo: ${error}`);
  }
 };

module.exports = {
  readMissionsData,
  writeNewMissinData,
  updateMissionData,
  deleteMissionData,
};