const express = require('express');
const { 
    readMissionsData, 
    writeNewMissinData,
    updateMissionData,
    deleteMissionData,
} = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/missions', async (req, res) => {
    const missions = await readMissionsData();

    return res.status(200).json({ missions });
});

// endpoint que retorna todos os dados das missões

app.post('/missions', async (req, res) => {
 const newMissions = req.body;

 const newMissionWithId = await writeNewMissinData(newMissions);

 return res.status(201).json({ missions: newMissionWithId });
});

// endpoint que atualiza dados de missões

app.post('/missions', async (req, res) => {
    const newMissions = req.body;
   
    const newMissionWithId = await writeNewMissinData(newMissions);
   
    return res.status(201).json({ missions: newMissionWithId });
});

const validateMissionId = (req, res, next) => {
    const { id } = req.params;

    const idAsNumber = Number(id);
    if (Number.isNaN(idAsNumber)) {
        res.status(400).send({ message: 'ID inválido! Precisa ser um número' });
    } else {
        next();
    }
};

// endpoint que adiciona novos dados de missões

app.put('/missions/:id', validateMissionId, async (req, res) => {
    const { id } = req.params;
    const updatedMissionData = req.body;

    const updatedMission = await updateMissionData(Number(id), updatedMissionData);
   
    return res.status(201).json({ missions: updatedMission });
});
 
// endpoint que adiciona novos dados de missões
   
app.delete('/missions/:id', validateMissionId, async (req, res) => {
    const { id } = req.params;
    await deleteMissionData(Number(id));

    return res.status(204).end();
});
   
// endpoint que deleta dados de missão pelo id

module.exports = app;