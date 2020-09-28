//Otimizacion de constantes
const descripcion = {
    alias: "d",
    demand: true,
    desc: "Descripcion de la terea por hacer",
};

const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la terea",
};

//optimizacion de opciones para los comandos
const opts_crear = {
    descripcion,
};

const opts_act = {
    descripcion,
    completado,
};

const opts_borrar = {
    descripcion,
};

const argv = require("yargs")
    .command("crear", "Crear una tarea por hacer", opts_crear)
    .command("actualizar", "Actualza tarea pendiente", opts_act)
    .command("borrar", "borrar una lista de taria pendiente", opts_borrar)
    .help().argv;

module.exports = {
    argv,
};