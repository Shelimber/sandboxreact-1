import React from 'react';
import './estilos.css';

/*
Componente funcional
importar una libreria math utilizando una sintaxis especifica
se espera tener una mejor comprension del manejo del DOM
*/

const nuevocliente2 = () =>{
    return <p className="Nc2">Mi Nombre es Maytte, soy un cliente
        y tengo {Math.floor(Math.random() * 30)} años de edad </p>
}

export default nuevocliente2;