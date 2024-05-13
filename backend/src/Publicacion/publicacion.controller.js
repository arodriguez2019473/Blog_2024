import { response, request } from "express";
import publicacion from "./publicacion.model.js";

export const publicacionGet = async (req, res) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    try {
      
        const [total, publicaciones] = await Promise.all([
      
            publicacion.countDocuments(query),
            publicacion.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        res.status(200).json({
            total,
            publicaciones
      
        });

    } 
    catch (error) {
        console.error('Error al obtener publicaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const publicacionPost = async (req, res) => {
    try {

        const { titulo, contenido, fecha } = req.body;

        const nuevaPublicacion = new publicacion({
            titulo,
            contenido,
            fecha,
        });

        await nuevaPublicacion.save();

        res.status(200).json({ publicacion: nuevaPublicacion });
    
    } 
    catch (error) {
        console.error('Error al crear publicacion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getPublicacionById = async (req, res) => {
    try {
        const { id } = req.params;

        const publicacionEncontrada = await publicacion.findOne({ _id: id });

        if (!publicacionEncontrada) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        res.status(200).json({ publicacion: publicacionEncontrada });
    } 
    
    catch (error) {
        console.error('Error al obtener publicación por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
