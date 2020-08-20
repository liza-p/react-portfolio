import React from "react";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";


const AboutMe = () => {
   

    return (
        <div className="container-fluid p-0">
            <Jumbotron page="aboutMe" />
         
            <div className="container">
            <h3 className="text-center pb-3">About Me</h3>
                <div className="row">
                    <div className="col-auto">
                        <img src="img/me.jpg" style={{width: '300px'}}/>
                        <div style={{fontSize: '20px'}}>
                            <p>Contact info</p>
                            <ul>
                                <li>Location: San Francisco, CA</li>
                                <li>Email: liza.poliachenko@gmail.com</li>
                                <li>Phone: (415) 716-6895</li>
                                <li><a href="https://www.linkedin.com/in/liza/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://github.com/liza-p" target="_blank">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col" style={{fontSize: '20px'}}>
                        <p> "I am a Full Stack web developer aiming to 
            build user friendly and intuitive experiences on the web. Before coding 
            I worked as a Quality Assurance Engineer for startups and middle size companies in San Francisco.
            When designing a front-end project I strive for a good user experience considering the diversity of users who will use it.
            When approaching the backend, I focus on creating quality products that translate to responsive front-end environments"</p>
                        <p>
                            <div>Front-end: JavaScript | React | HTML | CSS | Git</div>
                            <div>Back-end: NodeJs | Express | MongoDB | MySQL</div>
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
           
        </div>
    );
};

export default AboutMe;