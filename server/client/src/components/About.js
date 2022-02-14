import React from "react";
import abhipic from "../images/abhi.png";
const About = ()=>{
    return(
        <>
        <div className="conatiner emp-profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                    <img src ={abhipic} alt="abhipic" />
                    </div>

                    <div className="col-md-6">
                    <div className="profile-head">
                        <h5>Abhishek</h5>
                        <h6>Blockchain Developer</h6>
                        <p className="">RANKING : <span></span></p>

                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile">Timeline</a>
                            </li>
    
                        </ul>

                    </div>

                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn"name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Work link</p>
                            <a href="https://www.youtube.com/channel/UC-sKFLr5-0Iq7vG59m53IuA" target="_blank">Youtube</a><br/>
                            <a href="https://www.instagram.com/abhishek_drayan/" target="_blank">Instagram</a><br/>
                            <a href="https://www.linkedin.com/in/abhishek-choudhary-241b72213/" target="_blank">Linkedin</a><br/>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="col-md-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pan fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div className="row">
                        <div className="col-md-6">
                        <label>User Id</label>
                        </div>
                        <div className="col-md-6">
<p>5474</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                        <label>User Id</label>
                        </div>
                        <div className="col-md-6">
<p>5474</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                        <label>User Id</label>
                        </div>
                        <div className="col-md-6">
<p>5474</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                        <label>User Id</label>
                        </div>
                        <div className="col-md-6">
<p>5474</p>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                    </div>
                </div>
            </form>
        </div>
            
        </>
    )

}
export default About;