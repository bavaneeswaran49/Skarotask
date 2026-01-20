import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import navlogo from '../assets/SkaroTask.png'
export default function Navbar() {
    return (
        <>
            <section className="navbar-full" id='navbar-full'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <NavLink className="navbar-brand col-lg-5 text-light" to="/">
                            <img src={navlogo} alt="Logo" className="d-inline-block align-text-top mx-2 nav-logo" />
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 container ">
                                <li className="nav-item col-lg-2  col-xl-2 ">
                                    <NavLink className="nav-link active text-light" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item col-lg-2 col-xl-2 ">
                                    <NavLink className="nav-link text-light" to="/About">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item col-lg-2  col-xl-2 ">
                                    <NavLink className="nav-link text-light" to="/Work">
                                        Work
                                    </NavLink>
                                </li>
                                <li className="nav-item col-lg-2  col-xl-2 ">
                                    <NavLink className="nav-link text-light" to="/Service">
                                        Service
                                    </NavLink>
                                </li>
                                <li className="nav-item col-lg-2 col-xl-2 ">
                                    <NavLink className="nav-link text-light" to="/Contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-light" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
