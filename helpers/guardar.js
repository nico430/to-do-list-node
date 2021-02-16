const fs = require('fs');
const ruta = './DB/data.json';

const guardarArchivo = (data) => {

    fs.writeFileSync(ruta, JSON.stringify(data));

}

const leerDB = () => {

    if (!fs.existsSync(ruta)) {
        return null;
    }

    const info = fs.readFileSync(ruta, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    return data;

}

module.exports = {
    guardarArchivo,
    leerDB
};