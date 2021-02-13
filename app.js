require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {

    let main = '';
    const tareas = new Tareas();

    do {
        main = await inquirerMenu();
        console.log({ main });

        await pausa()

    } while (main !== '0');

}

main();