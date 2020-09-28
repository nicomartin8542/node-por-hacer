const fs = require("fs");
const colors = require("colors");

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error("No se pudo guardar el registro", err);
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return listadoPorHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion.toLowerCase() === descripcion.toLowerCase()
    );
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let resp = `No se encontro la tarea: ${descripcion}`.red;
    listadoPorHacer.forEach((tarea, index) => {
        if (tarea.descripcion.toLowerCase() === descripcion.toLowerCase()) {
            listadoPorHacer.splice(index, 1);
            resp = `Se elmino la tarea: ${tarea.descripcion}`.green;
        }
    });
    //otra forma de sacar elementos de un array
    // listadoPorHacer = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion !== descripcion;
    // })
    guardarDB();
    return resp;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
};