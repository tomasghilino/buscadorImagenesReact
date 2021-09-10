import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({ imagenes }) => {
  return (
    <div className=" d-flex align-items-stretch col-12 p-5 row">
      {imagenes.map((imagen) => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
};

export default ListadoImagenes;
