import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {


    return (<>
        <div className="container-fluid nav-Bg">
            <div className="row ">
                <div className="col-lg-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <NavLink className="navbar-brand" to="/">New Teach </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </>);


}

export default Navbar;