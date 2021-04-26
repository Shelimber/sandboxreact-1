import React, { Component } from 'react';
import PropsChild from './PropsChild';

class verejemplos extends Component{
    render(){
        return(
            <div>
                <h3>Ejemplo Props.Children</h3>
                <PropsChild nombre='Shelimber' children='Y soy estudiante de Ingenieria' />
            </div>
        )
    }
}
export default verejemplos;