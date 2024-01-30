import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3,faJs,faReact,faNodeJs} from '@fortawesome/free-brands-svg-icons'
import "../src/skills.css"

export default function Skills() {
  return (
    <div>
      <section id="services">
        <div className="container">
            <h1 className="text-center">Technical Skills</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className="fas servicesIcon fa-clock"><h6><b>C</b></h6></i>
                            <h4 className="card-title mt-3">C programming</h4>
                            <p className="card-text mt-3">C programming" typically refers to the programming language.C is known for its low-level capabilities, providing direct access to memory and hardware, which makes it suitable for systems programming and embedded systems. It also features a simple syntax and a rich set of operators, making it a powerful language for various applications. 
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-layer-group'><FontAwesomeIcon icon={faHtml5} /></i>
                            <h4 className="card-title mt-3">HTML5</h4>
                            <p className="card-text mt-3">HTML5, or Hypertext Markup Language version 5, is the latest revision of the HTML standard used for structuring and presenting content on the World Wide Web. HTML is a core technology for web development, and HTML5 incorporates new features and improvements over its predecessors, HTML 4.01 and XHTML 1.0.
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='far servicesIcon fa-check-circle'><FontAwesomeIcon icon={faCss3} /></i>
                            <h4 className="card-title mt-3">CSS3</h4>
                            <p className="card-text mt-3">CSS3, or Cascading Style Sheets level 3, is the latest version of the CSS specification, which is used to style and format the visual presentation of HTML and XML documents on the web. CSS is essential for web development as it allows developers to control the layout, colors, fonts, and other aspects of the user interface.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-search'><FontAwesomeIcon icon={faJs} /></i>
                            <h4 className="card-title mt-3">Javascript</h4>
                            <p className="card-text mt-3">avaScript is a high-level, dynamic programming language primarily used for building interactive and dynamic web pages. It is a versatile scripting language that allows developers to add functionality, interactivity, and behavior to web pages. JavaScript is an essential part of web development, working alongside HTML and CSS to create a complete and engaging user experience.
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-shield-alt'><FontAwesomeIcon icon={faReact} /></i>
                            <h4 className="card-title mt-3">React.js</h4>
                            <p className="card-text mt-3">React.js, commonly referred to as React, is an open-source JavaScript library developed and maintained by Facebook. React is used for building user interfaces, especially for single-page applications where the user interacts with the page without the need for a complete page reload. It allows developers to create reusable UI components, making it efficient for building complex and interactive web applications.
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-wrench'><FontAwesomeIcon icon={faNodeJs} /></i>
                            <h4 className="card-title mt-3">Node.js</h4>
                            <p className="card-text mt-3">Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code server-side. Unlike traditional server-side environments that use languages like PHP or Ruby, Node.js enables the use of JavaScript for both server-side and client-side scripting. It is built on the V8 JavaScript runtime engine, the same engine that powers the Chrome web browser.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
