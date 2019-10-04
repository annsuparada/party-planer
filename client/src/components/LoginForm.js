import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../store/actions/index";

const LoginForm = props => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const inputHandler = e => {
        setInput({...input, [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        e.preventDefault();
        props.login(props.history, input);
        setInput({
            username: "",
            password: ""
        })
    }
    return (
        <>
        <h1>This is LoginForm</h1>
        <form onSubmit={submitHandler}>
            <input
                placeholder="Username"
                type="text"
                name="username"
                value={input.username}
                onChange={inputHandler}
            />
            <input 
                 placeholder="Password"
                 type="password"
                 name="password"
                 value={input.password}
                 onChange={inputHandler} 
            />
            <button>Submit</button>
        </form>
        {props.error && <p>{props.error}</p>}
        </>
    )
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn,
    isLoggedIn: state.isLoggedIn,
    error: state.error
})

export default withRouter(
    connect(
      mapStateToProps,
      { login }
    )(LoginForm)
  )