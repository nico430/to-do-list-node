const { v4: uuidv4 } = require('uuid');
// los dos puntos depues del v4 indican el nombre de la variable a la cual se le va a asignar la desestructuracion o simplemente se renombra esta
class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
    }

}

module.exports = Tarea;