import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import '../../App.css';

function Menu(){
    return(<BrowserRouter> 
        <div>
             <ul className="ul-link">
                    <Link to="/basicos" className="ul-box">01 Basicos</Link>
                    {/*jsx, componentes, props, state, 
                    eventos y metodos, components naming,
                    hooks, stateless, stateful */}

                    <Link to="/cvida" className="ul-box">02 Ciclo de Vida</Link>

                    <Link to="/rutas" className="ul-box">03 Routing</Link>

                    <Link to="/rutas" className="ul-box">04 Redux</Link>

                    <Link to="/rutas" className="ul-box">05 ReduxToolkit</Link>

                    <Link to="/rutas" className="ul-box">06 API Fetch: Axios</Link>
        
                    <Link to="/rutas" className="ul-box">07 API Fetch: ReactQuery</Link>

                    <Link to="/rutas" className="ul-box">08 CRUD Single Entity</Link>

                    <Link to="/rutas" className="ul-box">09 CRUD OneToMany</Link>

                    <Link to="/rutas" className="ul-box">10 Login</Link>

                    <Link to="/rutas" className="ul-box">11 ShoppingCart</Link>
            </ul>
        </div>
        </BrowserRouter>
    )
}

export default Menu;
