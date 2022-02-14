import React, { useState } from "react";
import loginpic from "../images/login.png";
import { NavLink, useHistory } from "react-router-dom";

const Login =()=> {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory();

const loginUser=async (e) => {
    e.preventDefault();

    const res=await fetch('./signin',{
        method:"POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
             email,
              password
        })
    });
    const data=res.json();
    if(data.status===400 || !data){
        window.alert("Check your details");
        console.log("Check your details");
    } else{
        window.alert("Sucessfully Login");
        console.log("Sucessfully Login");
        history.push("/");
}}

  return (
  <>
  <section className="sign-in">
                <div className="container mt-5">
                <div className="signin-content">

                <div className="signin-image">
                        <figure>
                            <img src={loginpic} alt="registeration pic"/>
                        </figure>
                        <NavLink to="/signup" className="signup-image-link">Create Account</NavLink>
                        </div>

                    <div className="signuin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form method="POST" className="register-form" id="register-form">

                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                placeholder="Your Email" value={email} onChange={(e)=>setEmail(
                                    e.target.value
                                )}
                                />
                            </div>

                            


                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="pasword" name="password" id="password" autoComplete="off"
                                placeholder="Your Password" value={password}
                                onChange={(e)=>setPassword(  e.target.value)}
                                />
                            </div>


                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit"
                                    value="Log In" onClick={loginUser}
                                />

                            </div>

                        </form></div>
                        

                </div>

                </div>
            </section>
  </>
    
  )
}

export default Login;