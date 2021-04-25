/* EJEMPLO DE CLASS BASED COMPONENT
SIEMPRE DEBE HEREDAR DE LA CLASE COMPONENT*/

import React, { Component } from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3'

class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based Components</p>

                <NuevoCliente3 nombre='Luke SkyWalker' edad='25'/>
            </div>
        )
    }
}
export default verclientes1