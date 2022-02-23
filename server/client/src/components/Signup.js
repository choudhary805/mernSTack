// import React, {useState} from "react";
// import { NavLink , useHistory} from "react-router-dom";
// import signpic from "../images/signup.png";
// import "./Signup.css";

// const Signup = ()=>{
// //store user rigistration data
//     const history=useHistory();
//     const[user,setUser]=useState({
//         name:"",email:"",phone:"",work:"",password:"",cpassword:"" 
//     });
//     let name,value;
//     const handleInputs = (e) =>{
//         console.log(e);
//         name=e.target.name;
//         value=e.target.value;

//         setUser({...user,[name]:value});
//     }

//     //frontend to backend
//     const PostData = async (e) =>{
//         e.preventDefault();

//         const{name,email,phone,work,password,cpassword }=user;
//         const res=await fetch("/register",{
//             method:"POST",
//             headers : {
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify({
//                 name, email, phone, work, password, cpassword
//             })
//         });
//         const data=await res.json();

//         if(data.status===422 || !data){
//             window.alert("Invalid Registration");
//             console.log("Invalid Registration");
//         } else{
//             window.alert("Registration Sucess");
//             console.log("Sucessfull Registration");

//             history.push("/Login");
//         }
//     }



//     return(
//         <>
//             <section className="signup">
//                 <div className="container mt-5">
//                 <div className="signup-content">
//                     <div className="signup-form">
//                         <h2 className="form-title">Sign Up</h2>
//                         <form method="POST" className="register-form" id="register-form">

//                             <div className="form-group">
//                                 <label htmlFor="name">
//                                 <i class="zmdi zmdi-account material-icons-name"></i>
//                                 </label>
//                                 <input type="text" name="name" id="name" autoComplete="off"
//                                 value={user.name}
//                                 onChange={handleInputs}
//                                 placeholder="Your Name"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="email">
//                                 <i class="zmdi zmdi-email material-icons-name"></i>
//                                 </label>
//                                 <input type="email" name="email" id="email" autoComplete="off"
//                                 value={user.email}
//                                 onChange={handleInputs}
//                                 placeholder="Your Email"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="phone">
//                                 <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
//                                 </label>
//                                 <input type="number" name="phone" id="phone" autoComplete="off"
//                                 value={user.phone}
//                                 onChange={handleInputs}
//                                 placeholder="Your Phone"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="work">
//                                 <i class="zmdi zmdi-slideshow material-icons-name"></i>
//                                 </label>
//                                 <input type="text" name="work" id="work" autoComplete="off"
//                                 value={user.work}
//                                 onChange={handleInputs}
//                                 placeholder="Your Profession"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="password">
//                                 <i class="zmdi zmdi-account material-icons-name"></i>
//                                 </label>
//                                 <input type="pasword" name="password" id="password" autoComplete="off"
//                                 value={user.password}
//                                 onChange={handleInputs}
//                                 placeholder="Your Password"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="cpassword">
//                                 <i class="zmdi zmdi-account material-icons-name"></i>
//                                 </label>
//                                 <input type="cpasword" name="cpassword" id="cpassword" autoComplete="off"
//                                 value={user.cpassword}
//                                 onChange={handleInputs}
//                                 placeholder="Confirm Password"
//                                 />
//                             </div>

//                             <div className="form-group form-button">
//                                 <input type="submit" name="signup" id="signup" className="form-submit"
//                                     value="register" onClick={PostData}
//                                 />

//                             </div>

//                         </form></div>
//                         <div className="signup-image">
                        
//                         <NavLink to="/login" className="signup-image-link">I am Already Register</NavLink>

//                         </div>

//                 </div>

//                 </div>
//             </section>
//         </>
//     )

// }
// export default Signup;



import React, {useState} from "react";
import { NavLink , useHistory} from "react-router-dom";
import signpic from "../images/signup.png";
import "./Signup.css";

const Signup = ()=>{
//store user rigistration data
    const history=useHistory();
    const[user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:"" 
    });
    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    //frontend to backend
    const PostData = async (e) =>{
        e.preventDefault();

        const{name,email,phone,work,password,cpassword }=user;
        const res=await fetch("/register",{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data=await res.json();

        if(data.status===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else{
            window.alert("Registration Sucess");
            console.log("Sucessfull Registration");

            history.push("/login");
        }
    }



    return(
        <>
            <section className="signup">
                <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method="POST" className="register-form" id="register-form">

                            <div className="container2">
                                <label for="name">
                                Enter Your Name</label>
                                <input type="text" 
                                className="form-control"
                                name="name" id="exapmleInputName" 
                                autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                                placeholder="Your Name"
                                />
                            </div>

                            {/* <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" 
                                className="form-control" name="email" id="email" autoComplete="off"
                                value={user.email}
                                onChange={handleInputs}
                                placeholder="Your Email"
                                />
                            </div> */}

                                <div className="container2">
                                <label for="exampleInputEmail1">Enter Email Address</label>
                                <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="exampleInputEmail1"
                                autoComplete="off"
                                aria-describedby="emailHelp"
                                placeholder="Your Email"
                                value={user.email}
                                onChange={handleInputs}
                                placeholder="Your Email Address"
                                />
                            </div>

                            {/* <div className="form-group">
                                <label htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder="Your Phone"
                                />
                            </div> */}

                            <div className="container2">
                                <label for="phone">Enter Your Contact Number</label>
                                <input type="number"
                                className="form-control"
                                name="phone"
                                id="phone"
                                autoComplete="off"
                                aria-describedby="emailHelp"
                                placeholder="Your Phone Number"
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder="Your Phone"
                                />
                            </div>

                            {/* <div className="form-group">
                                <label htmlFor="work">
                                <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <input type="text" name="work" id="work" autoComplete="off"
                                value={user.work}
                                onChange={handleInputs}
                                placeholder="Your Profession"
                                />
                            </div> */}

                            <div className="container2">
                                <label for="exampleInputEmail1">Enter Your Profession</label>
                                <input
                                type="text"
                                className="form-control"
                                name="work"
                                id="work"
                                autoComplete="off"

                                placeholder="Your Profession"
                                value={user.work}
                                onChange={handleInputs}
                                placeholder="Your Profession"
                                />
                            </div>

                            {/* <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="pasword" name="password" id="password" autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Your Password"
                                />
                            </div> */}

                            <div className="container2">
                                <label for="password">Enter Password</label>
                                <input
                                type="password"
                                className="form-control"
                                name="password"
                                id=""
                                autoComplete="off"
                                
                                placeholder="Enter Password"
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Enter Password Here"
                                />
                            </div>

                            {/* <div className="form-group">
                                <label htmlFor="cpassword">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="cpasword" name="cpassword" id="cpassword" autoComplete="off"
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder="Confirm Password"
                                />
                            </div> */}

                            <div className="container2">
                                <label for="exampleInputEmail1">Confirm Password</label>
                                <input
                                type="password"
                                className="form-control"
                                name="cpassword"
                                id=""
                                autoComplete="off"
                                
                                placeholder="Your Email"
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder="Re-enter Your password"
                                />
                            </div>

                            {/* <div className="form-group form-button"> */}
                                {/* <input type="submit" name="signup" id="signup" className="btn btn-primary"
                                    value="Register" onClick={PostData}
                                /> */}
                                <input type="submit" name="signup" 
                                className="btn btn-primary btn-lg btn-block"
                                    value="Register" onClick={PostData}
                                />



                            {/* </div> */}

                        </form></div>
                        <div className="signup-image">
                        {/* <figure>
                            <img src="signpic" alt="registeration pic"/>
                        </figure> */}
                        <NavLink to="/login" className="signup-image-link">I am Already Register</NavLink>

                        </div>

                </div>

                </div>
            </section>
        </>
    )

}
export default Signup;