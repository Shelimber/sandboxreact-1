import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import '../../App.css';

function Submenu(){
    return(<BrowserRouter> 
        <div>
             <ul className="ul-link">
                    <Link to="/jsx" className="ul-box2">JSX</Link>

                    <Link to="/props" className="ul-box2">Props</Link>

                    <Link to="/states" className="ul-box2">States</Link>

            </ul>
        </div>
        </BrowserRouter>
    )
}

export default Submenu;