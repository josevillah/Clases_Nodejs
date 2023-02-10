import {response } from 'express'
import bcryptjs from 'bcryptjs'

import {Usuario} from '../models/usuario.js';

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get api',
        body
    });
};

const usuariosPost = async(req, res = response) => {
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    
    if(existeEmail){
     return res.status(400).json({
        msg: "El correo ya existe"
     });
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en DB
    await usuario.save();

    res.json({
        msg: 'post api',
        usuario
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