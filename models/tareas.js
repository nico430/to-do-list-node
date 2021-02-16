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

    get listadoArr() {
        // hago un arreglo en el cual voy a guardar todas las tareas por
        const listado = [];
        //elobject.key retorna un arreglo de todas las llaves que halla en tal objeto
        //a este arreglo retornado por el object.key lo paso por el forEach para hacer una accion para cada uno de ellos la cual seria crear una variable que almacene cada objeto del listado y lo guarde en el arreglo listado en el cual voy a poder separar tarea por tarea;
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;