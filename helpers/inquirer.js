const inquirer = require('inquirer');
require('colors');

const pregunta = [

    {
        type: 'list',
        name: 'opcion',
        message: '¿que desea hacer?',
        choices: [{
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },

            {
                value: '2',
                name: `${ '2.'.green } Listar tareas`
            },

            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },

            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },

            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },

            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },

            {
                value: '0',
                name: `${ '0.'.green } Salir\n`
            }
        ]
    }

];

const inquirerMenu = async() => {

    console.clear();

    console.log('========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('=========================\n'.green);

    let { opcion } = await inquirer.prompt(pregunta);

    return opcion;

}

const pausa = async() => {
    const pregunta = [{
        type: 'input',
        name: 'pausa',
        message: `Presione ${'enter'.blue} para continuar`
    }]

    console.log('\n');
    await inquirer.prompt(pregunta);
}

module.exports = {
    inquirerMenu,
    pausa
}