import { Router } from "express";
import { 
    usuariosPut, 
    usuariosGet, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete 
} from "../controllers/usuarios.js";

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete)


export {router}