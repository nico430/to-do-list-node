require('colors');

const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');

const { guardarArchivo, leerDB } = require('./helpers/guardar')
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {

    let opt = '';

    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) { //cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    await pausa();


    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1': //Crear tarea
                const desc = await leerInput('Descripcion:')
                tareas.crearTarea(desc);
                break;

            case '2': //Listar tareas
                tareas.listadoCompleto();
                break;

            case '3': //Listar tareas completas
                tareas.listadoCompletasIncompletas(true);
                break;

            case '4': //Listar tareas incompletas
                tareas.listadoCompletasIncompletas(null);
                break;

            case '5': //Completar tareas
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;

            case '6': //Borrar tareas
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Esta seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada'.green);
                    }
                }
                break;
        }

        guardarArchivo(tareas.listadoArr); //Guardar cambios

        await pausa()

    } while (main !== '0');

}

main();