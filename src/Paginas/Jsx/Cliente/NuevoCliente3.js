import React from 'react';
import './estilos.css';

/*
    uso de props:
    -props -> propiedad (parametros)
    -en java usamos parametros para trabajar con funciones getters y setters
    -un props puede tener cualquier tipo de datos
*/

const nuevocliente3 = (props) =>{
    return <p className="Nc3" >Mi Nombre es {props.nombre}, soy un cliente
        y tengo {props.edad} años de edad </p>
}

export default nuevocliente3;