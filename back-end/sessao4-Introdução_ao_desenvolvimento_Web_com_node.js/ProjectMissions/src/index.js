const readline = require('readline-sync')
const { readMissionsData, writeNewMissinData } = require('./utils/fsUtils.js');

const main = async() => {
    const name = readline.question("What is the name of the mission?");
    const year = readline.questionInt("What is the year of the mission?")
    const country = readline.question("What is the country of the mission?")
    const destination = readline.question("What is the destination of the mission?")

    const newMission = {name, year, country, destination};
    await writeNewMissinData(newMission);

    // const missions = await readMissionsData()
    // console.log(missions);
}

main();