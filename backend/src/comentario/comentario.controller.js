import Comentario from './comentario.model.js';
import Publicacion from '../Publicacion/publicacion.model.js';

export const crearComentario = async (req, res) => {
    try {
        const { contenido, autor, publicacionId } = req.body;

        const publicacionExistente = await Publicacion.findById(publicacionId);
        if (!publicacionExistente) {
            return res.status(404).json({ error: 'La publicación no existe' });
        }

        const nuevoComentario = new Comentario({
            contenido,
            autor,
            publicacion: publicacionId
        });

        await nuevoComentario.save();

        res.status(201).json({ comentario: nuevoComentario });
    } catch (error) {
        console.error('Error al crear comentario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const obtenerComentariosPorPublicacion = async (req, res) => {
    try {
        const { publicacionId } = req.params;

        const publicacionExistente = await Publicacion.findById(publicacionId);
        if (!publicacionExistente) {
            return res.status(404).json({ error: 'La publicación no existe' });
        }

        const comentarios = await Comentario.find({ publicacion: publicacionId });

        res.status(200).json({ comentarios });
    } catch (error) {
        console.error('Error al obtener comentarios por publicación:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
