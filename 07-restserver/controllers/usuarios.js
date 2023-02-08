import {response } from 'express'

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get api',
        body
    });
};

 const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post api',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'put api',
        body
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api',
        body
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete api',
        body
    });
}

export {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}