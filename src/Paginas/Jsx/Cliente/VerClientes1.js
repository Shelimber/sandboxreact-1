/* EJEMPLO DE CLASS BASED COMPONENT
SIEMPRE DEBE HEREDAR DE LA CLASE COMPONENT*/

import React, { Component } from 'react';
import NuevoCliente1 from './NuevoCliente1';

class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based Components</p>
                <NuevoCliente1 />
            </div>
        )
    }
}
export default verclientes1