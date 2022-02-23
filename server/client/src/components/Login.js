import React, { useState } from "react";
import loginpic from "../images/login.png";
import { NavLink, useHistory } from "react-router-dom";

import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('./signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        if (data.status === 400 || !data) {
            window.alert("Check your details");
            console.log("Check your details");
        } else {
            window.alert("Sucessfully Login");
            console.log("Sucessfully Login");
            history.push("/");
        }
    }

    return (
        <>

<section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"

                                className="img-fluid"
                                alt="Sample image"></img>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form method="POST">
                                {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div> */}
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0"></p>
                                </div>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" name="email" autoComplete="off" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        value={email} onChange={(e) => setEmail(
                                        e.target.value 
                                        )}

                                        />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>
                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" name="password" autoComplete="off" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" value={password}
                                        onChange={(e) => setPassword(e.target.value)}

                                         />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    {/* <a href="#!" className="text-body">Forgot password?</a> */}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button"
                                    
                                     name="signin"
                                    onClick={loginUser}
                                     className="btn btn-primary btn-lg"
                                       >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                                            
                                            <NavLink to="/signup" className="link-danger">Create an Account</NavLink>
                                            
                                            </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* <!-- Copyright --> */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                    {/* <!-- Copyright --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </div>
            </section>


























            {/* <section className="sign-in">
                <div className="Lcontainer">
                    <div className="Lc1">
                        <NavLink to="/signup" className="Lc1item-2">Create an Account</NavLink>
                    <img src="https://img.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg" 
                    class="img-fluid" alt="login" image></img>
                    </div>
                    <div className="Lc2">
                        <div className="Lc2item-1">
                            <h2>Sign In</h2>
                        </div>
                        <form method="POST" id="register-form">
                            <div className="Lc2item-2">
                                <label htmlFor="email">



                                    <i className="zmdi zmdi-email material-icons-name"></i>  
                                </label>


                                <input className="form-control" type="email" name="email" id="email" autoComplete="off"
                                    placeholder="Your Email" value={email} onChange={(e) => setEmail(
                                        e.target.value
                                    )}
                                />


                            </div>
                            <div className="Lc2item-3">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                    
                                </label>
                                <input type="pasword" name="password" id="password" autoComplete="off"
                                    placeholder="Your Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="Lc2item-4">
                                <input type="submit" name="signin" id="signin" className="form-submit"
                                    value="Log In" onClick={loginUser}
                                />
                            </div>
                        </form>
                    </div>

                </div>
            </section> */}




        </>

    )
}

export default Login;