import React, { Component } from 'react';

class propschild extends Component{
    render(){
        return <p>Hola mi nombre es {this.props.nombre} {this.props.children} </p>   
    }
}

export default propschild;