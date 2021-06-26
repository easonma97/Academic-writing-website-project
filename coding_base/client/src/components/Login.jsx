import React, {useState} from "react";
import Input from "./Input";
import axios from "axios";


var users_list = [];

function Login(){ 
    const [user, setUser] = useState({username: '', password: ''});
  
    get_users_list(function(result){
        users_list = result
        // console.log(users_list)
    });
    
    function get_users_list(callback){
        var array = [];
        axios.get('http://localhost:8080/users/')
            .then(res => {
                if(res.data.length > 0) {
                    var i; 
                    for (i=0; i < res.data.length; i++){
                    let exist_user = {username: res.data[i].username, password: res.data[i].password, id: res.data[i]._id}
                    array.push(exist_user)
                    }
                }
                callback(array)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var i;
        var login_successs = false;

        for(i=0; i < users_list.length; i++){
            if(user.username == users_list[i].username && user.password == users_list[i].password){
                const temp = i;
                window.location.href = "/page";
                login_successs = true;
                document.cookie = "user_id=" + users_list[temp].id;
                break;
            }
        }

        if (!login_successs){
            alert("Your username and password is incorrect! Please try again!");
            window.location.href = "/";
        }
        
    }

    const handleNameInputChange = (event) => {
        event.persist();
        setUser((values) => ({
            ...values,
            username: event.target.value,
        }));
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setUser((values) => ({
            ...values,
            password: event.target.value,
        }))
    };

    // return <login>
    //     <div className="container">
    //         <h1>User Login</h1>
    //         <form className="form" onSubmit={handleSubmit}>
    //             <Input type="text" placeholder="Username" value={user.username} onChange={handleNameInputChange}/>
    //             <Input type="password" placeholder="Password" value={user.password} onChange={handlePasswordInputChange}/>
    //             <button className="btn btn-primary" type="submit">Log in</button>
    //         </form>
    //     </div>
    // </login>
    return <div className="limiter">
    <div className="container-login100 signupbackground" style={{backgroundImage:"url("+require("../assets/img/login.jpg").default+")"}}>
      <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
        <form className="form login100-form validate-form" onSubmit={handleSubmit}>
          <span className="login100-form-title p-b-55">
            Login
          </span>
          <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
            <input className="input100" type="text" name="username" placeholder="Username" value={user.username} onChange={handleNameInputChange} />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <span className="lnr lnr-user" />
            </span>
          </div>
          <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required" value={user.password} onChange={handlePasswordInputChange}>
            <input className="input100" type="password" name="pass" placeholder="Password" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <span className="lnr lnr-lock" />
            </span>
          </div>
          <div className="container-login100-form-btn p-t-25">
            <button className="login100-form-btn" type="submit">
              Login
            </button>
          </div>
          <div className="text-center w-full p-t-115">
            <span className="txt1">
              Not a member?
            </span>
            <a className="txt1 bo1 hov1" href='/signUp'>
              Sign up now							
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
} 

export default Login;
