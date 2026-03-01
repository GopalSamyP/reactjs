import { useState } from 'react'
import './LoginForm.css'
export function LoginForm(){
    const [showPassword, setShowPassword] = useState(false);

    function tollgePassword(){
        setShowPassword(!showPassword);
    }
     return (
        <>
        <div>
            <input
            placeholder="Email"
            className="login-input"
            />
        </div>
        <div>
            <input
            placeholder="Password"
            type={showPassword?'text':'password'}
            className="login-input"
            />
        </div>
        <button className="login-button">Login</button>
        <button className="login-button" onClick={tollgePassword}>{showPassword ? 'Hide' : 'Show'}</button>
        </>
    );
}