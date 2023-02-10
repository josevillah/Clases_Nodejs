import { Router } from "express";
import {check} from 'express-validator';
import {validarCampos} from '../middlewares/validar-campos.js';
import { 
    usuariosPut,
    usuariosGet, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete 
} from "../controllers/usuarios.js";
import { Role } from "../models/role.js";

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y debe ser de mas de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol').custom( async(rol = '') =>{
        const existeRol = await Role.findOne({rol});
        if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
        }
    }),
    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos,
] ,usuariosPost);

router.put('/', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete)


export {router}