import mongoose from "mongoose";

const ComentarioSchema = mongoose.Schema({
    
    contenido: {
        type: String,
        required: [true, "El contenido es obligatorio"]
    },
    
    autor: {
        type: String,
        required: [true, "El autor es obligatorio"]
    },
    
    fecha: {
        type: Date,
        default: Date.now
    },

});

export default mongoose.model('Comentario', ComentarioSchema);
