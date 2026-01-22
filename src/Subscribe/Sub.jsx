import React, { useState } from 'react'
import '../App.css'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sub() {
  const [isRegister, setIsRegister] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})

  const nameRegex = /^[A-Z][a-zA-Z\s]*$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&_]).+$/

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}

    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name must start with a capital letter'
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email must end with @gmail.com'
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must contain letters, numbers & 1 special character'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const users = JSON.parse(localStorage.getItem('users')) || []

      const emailExists = users.some(
        (user) => user.email === formData.email
      )

      if (emailExists) {
        alert('Email already registered')
        return
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }

      localStorage.setItem('users', JSON.stringify([...users, newUser]))

      alert('Registration Successful')
      setIsRegister(false)

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('users')) || []

    const validUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    )

    if (validUser) {
      alert(`Welcome ${validUser.name}`)
      navigate('/')
    } else {
      alert('Invalid Email or Password')
    }
  }

  return (
    <div className="subscribe">
      <div className="height">
        <div className="title">
          <div className="reg" onClick={() => setIsRegister(true)}>
            <p className={`register ${isRegister ? 'active' : ''}`}>
              Register
            </p>
          </div>

          <div className="log" onClick={() => setIsRegister(false)}>
            <p className={`login ${!isRegister ? 'active' : ''}`}>
              Login
            </p>
          </div>
        </div>

        {isRegister ? (
          <div className="form">
            <form className="row g-3" onSubmit={handleRegisterSubmit}>
              <div className="col-md-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              <div className="col-md-6">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              <div className="col-md-6 position-relative">
                <label>Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

               
                <i
                  className={`fa-regular ${
                    showPassword ? 'fa-eye' : 'fa-eye-slash'
                  } password-eye`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>

                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>

              <div className="col-12">
                <button className="btn btn-success w-50" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        ) : (
         
          <div className="form">
            <form className="row g-3" onSubmit={handleLoginSubmit}>
              <div className="col-12">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 position-relative">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <i
                  className={`fa-regular ${
                    showPassword ? 'fa-eye' : 'fa-eye-slash'
                  } password-eye`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              <div className="col-12">
                <NavLink className="sub" to="/home"><button className="btn btn-primary w-50" type="submit">
                  Login
                </button></NavLink>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
