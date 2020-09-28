//require
const argv = require("./config/yargs").argv;
const colors = require("colors");
const {
    crear,
    getListado,
    actualizar,
    borrar,
} = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let result = crear(argv.descripcion);
        console.log(result);
        break;
    case "listar":
        let listado = getListado();

        for (const list of listado) {
            console.log("========Tareas por hacer===========".green);
            console.log(list.descripcion);
            console.log("Estado: ", list.completado);
            console.log("===================================".green);
        }
        break;
    case "actualizar":
        let resp = actualizar(argv.descripcion, argv.completado);
        if (resp) {
            console.log("Se actualizo la tarea");
        } else {
            console.log("No se pudo actualizar la tarea");
        }
        break;

    case "borrar":
        let respB = borrar(argv.descripcion);
        console.log(respB);
        break;
    default:
        console.log("comando no reconocido");
        break;
}