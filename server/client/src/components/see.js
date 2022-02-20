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
            <section className="sign-in">
                <div className="Lcontainer">
                    <div className="Lcontainer-1">

                        <div className="Lc1item-1">
                            <figure>
                                <img src={loginpic} alt="registeration pic" />
                            </figure>
                            <NavLink to="/signup" className="Lc1item-2">Create Account</NavLink>
                        </div>

                        <div className="Lc1item-3">
                            <h2 className="Lc2item-2h2">Sign In</h2>
                            <form method="POST" className="" id="register-form">

                                <div className="Lc1item-2form">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
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

                            </form></div>


                    </div>

                </div>
            </section>
        </>

    )
}

export default Login;