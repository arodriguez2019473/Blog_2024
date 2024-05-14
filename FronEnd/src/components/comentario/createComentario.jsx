import React, { useState } from 'react';


function Comentario() {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Comentario:', comentario);
    setNombre('');
    setComentario('');
  };

  return (
    <div>
      <h2>Deja un comentario:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comentario">Comentario:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(event) => setComentario(event.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Comentario;
