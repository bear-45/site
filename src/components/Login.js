import React from "react"
import './Login.css'

const Login=()=>{
    return (
        <div className="big-box ">
            <div className="box-1">
                <div className="box-1-2">
                <h1>DSC DEVELOPERS</h1>
                <p>Join the community to learn,compete and share resources.</p>
                <h5>Already have an account? <a href="#">Sign in</a></h5>
                </div>
            </div>
            <div className="box-2">
            <h1>WELCOME</h1>
            <div className="box-2-1">
                <label htmlFor="username">Username
                <input  type='text' placeholder="Username"/>
                </label>
                <label htmlFor="email">E-mail
                <input type='text' placeholder="E-mail"/></label>
                
                <label htmlFor="Password">Password
                <input type='password' placeholder="Password"/></label>
                
                <label htmlFor="Cpassword">Confirm Password
                <input type='password' placeholder="Confirm Password"/></label>
                <label htmlFor='Remindme'>
                <input type="checkbox"/>Remember Me
                </label>
                <br/>
                <div className="btn">
                <button type="submit">Sign Up</button>
                </div>
                </div>
            </div>
        </div>
    )
};


export default Login;