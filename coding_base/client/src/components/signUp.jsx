import React, { useState } from "react"
import Input from "./Input";
import axios from 'axios';

function SignUp(){
    const [user, setUser] = useState({username: '', password: ''});
    const [submitted, setSubmitted] = useState(false);

    const showSuccess = submitted;

    const handleNameInputChange = (event) => {
        event.persist();
        setUser((values) => ({
            ...values,
            username: event.target.value,
        }))
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setUser((values) => ({
            ...values,
            password: event.target.value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const input = {
            username: user.username,
            password: user.password
        }

        console.log(input);

        axios.post('http://localhost:8080/users/add', input)
            .then(res => {
              console.log(res.data);
              setSubmitted(true);
            });
    };

    function alertFunction() {
        alert("Success! Thank you for registering");
        window.location.href = "/";
    }

    // return <signup>
    //     <div className="container">
    //         <h1>User Register</h1>
    //         <form className="form" onSubmit={handleSubmit}>
    //             <Input type="text" placeholder="Username" value={user.username} onChange={handleNameInputChange} />
    //             <Input type="text" placeholder="Password" value={user.password} onChange={handlePasswordInputChange} />
    //             <button className="btn btn-primary" type="submit">Register</button>
    //         </form>
    //         {showSuccess && alertFunction()}
    //     </div>
    // </signup>
    return  <div className="limiter">
    <div className="container-login100" style={{backgroundImage:"url("+require("../assets/img/login.jpg").default+")"}}>
      <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30 signuppage">
        <form className="form login100-form validate-form" onSubmit={handleSubmit}>
          <span className="login100-form-title p-b-55">
            Sign Up
          </span>
          <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
            <input className="input100" type="text" name="username" placeholder="Username" value={user.username} onChange={handleNameInputChange} />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <span className="lnr lnr-user" />
            </span>
          </div>
          <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
            <input className="input100" type="password" name="pass" placeholder="Password" value={user.password} onChange={handlePasswordInputChange}/>
            <span className="focus-input100" />
            <span className="symbol-input100">
              <span className="lnr lnr-lock" />
            </span>
          </div>
          <div className="container-login100-form-btn p-t-25">
            <button className="login100-form-btn" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        {showSuccess && alertFunction()}
      </div>
    </div>
  </div>
}


export default SignUp;