import React, { Component } from 'react';
import './estilos.css';
/*
    uso de props:
    -props -> propiedad (parametros)
    -en java usamos parametros para trabajar con funciones getters y setters
    -un props puede tener cualquier tipo de datos
    -utilizacion de props en un class based component
*/

class nuevocliente4 extends Component{
    render(){
        return <p className="Nc4" >Mi nombre es {this.props.nombre } y tengo {this.props.edad} años </p>
    }
}

export default nuevocliente4;