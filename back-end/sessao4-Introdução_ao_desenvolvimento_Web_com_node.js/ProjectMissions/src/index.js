const { readMissionsData, writeNewMissinData } = require('./utils/fsUtils.js');

const main = async() => {
    await writeNewMissinData({
            "id": 100,
            "name": "Tryber 1",
            "year": "2019",
            "country": "Brasil",
            "destination": "Marte"
    })
}

main();