import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: [ true, "el nombre es obligatorio"]
    },

    role: {
        type: String,
        require: true,
        default: "USER_ROLE"
    },

    estado: {
        type:Boolean,
        default: true
    },

});

UserSchema.methods.toJSON = function () {
    const { __v, ...usuario } = this.toObject();
    usuario.uid = id;
    return usuario; 
}

export default mongoose.model('User', UserSchema)
