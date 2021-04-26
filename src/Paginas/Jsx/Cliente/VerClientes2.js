/* EJEMPLO DE CLASS BASED COMPONENT
SIEMPRE DEBE HEREDAR DE LA CLASE COMPONENT*/

import React, { Component } from 'react';

class verclientes2 extends Component{
    state {
        jugadores = [
            {nombre='', edad=''},
            {nombre='', edad=''},
            {nombre='', edad=''},
            {nombre='', edad=''},
        ]
    };
    render(){
        return(
            <div>
                <p>Uso de class based Components</p>
            </div>
        )
    }
}
export default verclientes2