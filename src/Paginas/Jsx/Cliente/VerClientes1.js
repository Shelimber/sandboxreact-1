/* EJEMPLO DE CLASS BASED COMPONENT
SIEMPRE DEBE HEREDAR DE LA CLASE COMPONENT*/

import React, { Component } from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2'

class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based Components</p>

                <NuevoCliente2 />
            </div>
        )
    }
}
export default verclientes1