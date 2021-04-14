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
            case '1':
                // crear tarea

                const desc = await leerInput('Descripcion:')
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listadoCompletasIncompletas(true);
                break;
            case '4':
                tareas.listadoCompletasIncompletas(null);
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                console.log(ids);
                break;
            case '6':
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

        guardarArchivo(tareas.listadoArr);

        await pausa()

    } while (main !== '0');

}

main();