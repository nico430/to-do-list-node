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
    console.log('  Seleccione una opción'.white);
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

const leerInput = async(message) => {

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor';
            }

            return true;

        }
    }]

    const { desc } = await inquirer.prompt(question);
    return desc;

}

const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${ i + 1 }.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    })

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }]

    const { id } = await inquirer.prompt(preguntas);
    return id;

}

const confirmar = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }]

    const { ok } = await inquirer.prompt(question);
    return ok;
}


const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${ i + 1 }.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false //marcar si esta completada o no
        }
    });

    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}