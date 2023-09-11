import React from 'react'
import Style from '../styles/Login.module.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className={Style.loginbody}>
            <div className={Style.overlay}></div>
            <form className={Style.form}>
                <div className={Style.logodiv}>
                    <h3 className={Style.warmbook}>WARMBOOK</h3>
                    <img src={logo} alt="logodiv" className={Style.img} />
                </div>
                <div className={Style.logodiv}>
                    <h5>Welcome back</h5>
                    <p>Please sign in to your account</p>
                </div>
                <div>
                    <input type="text" placeholder='Email' className={Style.input} autoComplete='off' />
                </div>
                <div>
                    <input type="text" placeholder='Password' className={Style.input} autoComplete='off' />
                </div>
                <div className={Style.links}>
                    <Link>Forgot password?</Link>
                    <Link to={'/register'}>Don't have an account?</Link>
                </div>
                <button className={Style.sign}>Sign in</button>
                <div className={Style.lineflex}>
                    <div className={Style.line}></div>
                    <p>OR</p>
                    <div className={Style.line}></div>
                </div>
                <button className={Style.google}>Sign in with google</button>
            </form>
        </div>
    )
}

export default Login