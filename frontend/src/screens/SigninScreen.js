import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin } from '../actions/userActions';

export default function SigninScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/'; 

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo])
    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(signin(email, password));
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <input 
                        type="password" 
                        id="email" 
                        placeholder="Enter password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer ? {' '}
                        <Link to="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
