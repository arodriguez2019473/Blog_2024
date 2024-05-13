import mongoose from "mongoose";

const PublicacionSchema = mongoose.Schema({

    titulo: {
        type: String,
        require: [ true, "El titulo es Obligatorio"]
    },

    contenido: {
        type: String,
        require: [ true, "El contenido es Obligatorio"]

    },

    fecha: {
        type:Date,
        default: Date.now
    },

    estado: {
        type: String,
        default: true,
    }

});

export default mongoose.model('Publicacion', PublicacionSchema)
