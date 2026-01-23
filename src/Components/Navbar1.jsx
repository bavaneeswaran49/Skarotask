import React from 'react'
export default function Navbar1() {
    return (
        <>
            <section className="navbar-full" id="navbar-full">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <NavLink className="navbar-brand col-lg-5 text-light" to="/">
                            <img
                                src={navlogo}
                                alt="Logo"
                                className="d-inline-block align-text-top mx-2 nav-logo"
                            />
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
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 container">

                                <li className="nav-item col-lg-2 col-xl-2">
                                    <a className="nav-link text-light" href='#home'>
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item col-lg-2 col-xl-2">
                                    <a href='#about' className="nav-link text-light" >
                                        About
                                    </a>
                                </li>

                                <li className="nav-item col-lg-2 col-xl-2">
                                    <a className="nav-link text-light" href='#service'>
                                        Service
                                    </a>
                                </li>

                                <li className="nav-item col-lg-2 col-xl-2">
                                    <a className="nav-link text-light" href='#work'>
                                        Work
                                    </a>
                                </li>
                                <li className="nav-item col-lg-2 col-xl-2">
                                    <a className="nav-link text-light" href='#footerSpacer'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
