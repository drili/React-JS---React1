import React, { Component } from 'react';

// - Stateless Functional Component ()
// - Destructuring (props) -> ({ totalCounters })
const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar <span className='badge badge-pill bg-secondary'>{totalCounters}</span></a>
            </div>
        </nav>
    );
}

export default Navbar;