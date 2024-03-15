import React from 'react'
import './LoginPage.css'
import logo from '../img/9gag_logo.svg'

const LoginPage = () => {
  return (
    <div className='Login'>

        <form action="submit" className='Login-form'>
            <img src={logo} alt="logo" />
            <h2>Login</h2>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
            <p>Forgot your password?</p>
            <p>Don't have an account? <span>Sign up</span></p>
        </form>

        <div className='Social-btns'>
            <button>Facebook</button>
            <button>Google</button>
            <button>Apple</button>
        </div>

    </div>
  )
}

export default LoginPage