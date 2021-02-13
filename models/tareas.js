const Tarea = require("./tarea");


/*
Ejemplo de listado

    -listado:
            { 'uuid-123-1233523-12341-23 : {id:2 , desc: asdfa , completadoEn: fecha}}
*/

//Nota: las variables pueden empezar con giones bajos eparte del nombre
//los corchetes al final de this._listado se usan para crear un elemento dentro del objeto

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }


    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;