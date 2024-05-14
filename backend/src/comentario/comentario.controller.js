import Comentario from './comentario.model.js';
import Publicacion from '../Publicacion/publicacion.model.js';

export const comentarioPost = async (req, res) => {
    try {
        const { contenido, autor, publicacionId } = req.body;

        const publicacion = await Publicacion.findById(publicacionId);
        if (!publicacion) {
            return res.status(404).json({
                msg: "La publicación no existe"
            });
        }

        const nuevoComentario = new Comentario({ contenido, autor });

        publicacion.comentario.push(nuevoComentario);

        await Promise.all([publicacion.save(), nuevoComentario.save()]);

        res.status(200).json({
            comentario: nuevoComentario,
            publicacion
        });
    } catch (error) {
        console.error("Error al añadir comentario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};


export const comentarioGetId = async (req, res) => {
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
