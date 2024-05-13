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
    },

    comentario: {
        type: [{
            contenido: { type: String, require: true},
            autor: { type: String, require: true},
            fecha: { type: String, require: true}
        
        }],
        _id: false,
    }




});

export default mongoose.model('Publicacion', PublicacionSchema)

/*
    publicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publicacion',
        required: [true, "La publicación es obligatoria"]
    }
*/