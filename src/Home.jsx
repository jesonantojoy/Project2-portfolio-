import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import "../src/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {

 return (
    
<div>
    <section>

    
        <div className="main">
            <div className="Information">
                <h3>Hi, I'm Jeson</h3>
                <h1>Web Developer</h1>
                <p>Enthusiastic entry-level front-end developer with proficiency in
HTML, CSS, JavaScript and React.js . Eager to contribute creative
and technical skills to a dynamic team, building visually
appealing and user-friendly websites while staying abreast of
industry trends for continuous growth.</p>
                <div className="social">
                    <a href='https://www.linkedin.com/in/jesonantojoy/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='https://github.com/jesonantojoy'target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
               <a href='JesonAntoJoyResume.pdf' download="Resume.pdf"><button className="cv-btn">Download CV</button></a>
            </div>
            <div className="images">
                   <div className="white-bg">
                        <div className="blue-bg">
                            <img src="https://media.licdn.com/dms/image/D5603AQG6qa_HPJqP0A/profile-displayphoto-shrink_400_400/0/1667019449567?e=1711584000&v=beta&t=ZRGzdOVyZ_MEbSRURKYSHlWU0vpVP4IXeAd7h165-rk" alt="image"></img>
                        </div>
                </div>
            </div>
            </div>

    </section>
    </div>
  )
}
