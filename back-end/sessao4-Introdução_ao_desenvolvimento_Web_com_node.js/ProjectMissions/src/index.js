const { readMissionsData } = require('./utils/fsUtils.js');

const main = async() => {
    const missions = await readMissionsData()
    console.log(missions);
}

main();