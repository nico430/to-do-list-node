require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {

    let main = '';

    do {
        main = await inquirerMenu();
        console.log({ opcion } = main);
        await pausa()

    } while (main !== '0');

}

main();