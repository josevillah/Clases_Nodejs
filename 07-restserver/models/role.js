import { Schema, model} from "mongoose";

const RoleSchema = Schema({
    rol: {
        Type: String,
        required: [true, 'El rol es obligatorio']
    }
});


const Role = model('Role', RoleSchema);

export {
    Role
}