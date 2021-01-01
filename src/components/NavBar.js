import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="title">Criclive</div>
            <div className="links">
                <Link to="/playersearch" className="link">PlayerSearch</Link>
            </div>
        </div>
    )
}

export default NavBar
