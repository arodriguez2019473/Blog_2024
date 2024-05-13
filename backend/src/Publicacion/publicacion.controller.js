import { response, request } from "express";
import Publicacion from "./publicacion.model.js";

export const publicacionGet = async (req, res) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    try {
      
        const [total, publicaciones] = await Promise.all([
      
            Publicacion.countDocuments(query),
            Publicacion.find(query)
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

    const { titulo, contenido, fecha} = req.body;
    const publicacion = new Publicacion ( {titulo, contenido, fecha});

    await publicacion.save();
 
    res.status(200).json({
        publicacion

    });
};

export const getPublicacionById = async (req, res) => {

    const {id} = req.params;
    const publicacion = await Publicacion.findOne({_id: id}); 

    res.status(200).json({
        publicacion
    })

};