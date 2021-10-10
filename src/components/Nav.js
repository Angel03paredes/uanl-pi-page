import React from 'react'
import { Link } from 'react-router-dom';
import './../App.css'

const Nav = ()=>{
return (
    <div className="nav">
        <Link className="brand" to="/" > Bit Editor </Link>

        <ul className="ulNav">
            <li><Link to="/manual" className="item-nav"> Manual </Link></li>
            <li><Link to="/" className="item-nav"> Inicio </Link></li>
        </ul>
    </div>

)
};

export default Nav;