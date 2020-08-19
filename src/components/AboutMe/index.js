import React from "react";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";


const AboutMe = () => {
   

    return (
        <div className="container-fluid p-0">
            <Jumbotron page="aboutMe" />
         
            <div className="container">
            <p>About Me</p>
                <div className="row">
                    <div className="col 6">
                        <img src="/img/me.png"/>
                        <p>Contact info</p>
                        <ul>
                            <li> Location: San Francisco, CA</li>
                            <li>Email: liza.poliachenko@gmail.com</li>
                            <li> Phone: (415) 716-6895</li>
                        </ul>
                    </div>
                    <div className="col 6">
                        <p> "I am a Full Stack web developer aiming to 
            build user friendly and intuitive experiences on the web. Before coding 
            I worked as a Quality Assurance Engineer for startups and middle size companies in San Francisco.
            When designing a front-end project I strive for a good user experience considering the diversity of users who will use it.
            When approaching the backend, I focus on creating quality products that translate to responsive front-end environments"</p>


                    </div>
                </div>
            </div>

            <Footer/>
           
        </div>
    );
};

export default AboutMe;