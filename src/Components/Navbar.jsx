import React from 'react'
import '../App.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import navlogo from '../assets/SkaroTask.png'

export default function Navbar() {
    const [isRegister, setIsRegister] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
      const [showPassword1, setShowPassword1] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const nameRegex = /^[A-Z][a-zA-Z\s]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&_]).+$/;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!nameRegex.test(formData.name)) newErrors.name = 'Name must start with a capital letter';
        if (!emailRegex.test(formData.email)) newErrors.email = 'Email must end with @gmail.com';
        if (!passwordRegex.test(formData.password)) newErrors.password = 'Password must contain letters, numbers & 1 special character';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const emailExists = users.some((user) => user.email === formData.email);

            if (emailExists) {
                alert('Email already registered');
                return;
            }

            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            };

            localStorage.setItem('users', JSON.stringify([...users, newUser]));

            alert('Registration Successful  Please login');


            setIsRegister(false);

            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = users.find(
            (user) => user.email === formData.email && user.password === formData.password
        );

        if (validUser) {
            alert(`Welcome ${validUser.name}! For Try Do Premium`);
            navigate('/home1');
        } else {
            alert('Invalid Email or Password ');
        }
    };

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
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 container">
                                <li className="nav-item col-lg-2">
                                    <a className="nav-link text-light" href="#home">Home</a>
                                </li>
                                <li className="nav-item col-lg-2">
                                    <a className="nav-link text-light" href="#about">About</a>
                                </li>
                                <li className="nav-item col-lg-2">
                                    <a className="nav-link text-light" href="#service">Service</a>
                                </li>
                                <li className="nav-item col-lg-2">
                                    <a className="nav-link text-light" href="#work">Work</a>
                                </li>
                                <li className="nav-item col-lg-2">
                                    <a className="nav-link text-light" href="#footerSpacer">Contact</a>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="btn btn-outline-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </nav>
            </section>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-centered">
                    <div className="modal-content">
                        <div className="modal-header px-0 py-0">
                            <div className="title">
                                <div className="reg" onClick={() => setIsRegister(true)}>
                                    <p className={`register ${isRegister ? 'active' : ''}`}>Register</p>
                                </div>
                                <div className="log" onClick={() => setIsRegister(false)}>
                                    <p className={`login ${!isRegister ? 'active' : ''}`}>Login</p>
                                </div>
                                <div className='cls mx-4 my-4'><button
                                    type="button"
                                    className="btn-close bg-light"
                                    data-bs-dismiss="modal"
                                ></button></div>
                            </div>
                        </div>

                        <div className="modal-body">
                            {isRegister ? (
                                <div className="form">
                                    <form className="row g-3 for" onSubmit={handleRegisterSubmit}>
                                        <div className="col-md-6">
                                            <label>Name</label>
                                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                                            {errors.name && <small className="text-danger">{errors.name}</small>}
                                        </div>

                                        <div className="col-md-6">
                                            <label>Email</label>
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                                            {errors.email && <small className="text-danger">{errors.email}</small>}
                                        </div>

                                        <div className="col-md-6">
                                            <label>Password</label>
                                            <input type={showPassword ? 'text' : 'password'} className="form-control" name="password" value={formData.password} onChange={handleChange} />
                                            {errors.password && <small className="text-danger">{errors.password}</small>}
                                        </div>

                                        <div className="col-md-6 position-relative">
                                            <label>Confirm Password</label>
                                            <input type={showPassword ? 'text' : 'password'} className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                                            <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-solid fa-eye-slash'} password-eye`} onClick={() => setShowPassword(!showPassword)}></i>
                                            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-primary w-50" type="submit">Register</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="form ">
                                    <form className="row g-3  for" onSubmit={handleLoginSubmit}>
                                        <div className="col-12">
                                            <label>Email</label>
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                                        </div>

                                        <div className="col-12 position-relative">
                                            <label>Password</label>
                                            <input type={showPassword ? 'text' : 'password'} className="form-control" name="password" value={formData.password} onChange={handleChange} />
                                            <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-solid fa-eye-slash'} password-eye`} onClick={() => setShowPassword(!showPassword)}></i>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-primary w-50" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
