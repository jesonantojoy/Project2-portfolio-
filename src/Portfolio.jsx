import React from 'react'
import"../src/Portfolio.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (

 <section id="portfolio">
    
            <h1 className="text1">Portfolio</h1>
            
            <div className='container'>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVe4gMCR1w8HvOLU2ibivRuUnJ_qtQCem3g&usqp=CAU" alt="Card image"></img>
                        <div className="card-body">
                            <h4 className="card-title">To Do List</h4>
                            <p className="card-text">to-do list application crafted with React.js, delivering a seamless and intuitive
task management experience.This application empowers users to efficiently organize their daily activities, set
priorities, and stay on top of their tasks. With a clean and modern interface</p>
                            <div className="text-center">
                                <a href="https://project3-to-do-list.vercel.app/" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pZMoTleYeQ5ggH4QLfllEvShuoqlmCPCLw&usqp=CAU" alt="Card image"></img>
                        <div className="card-body">
                            <h4 className="card-title">Portfolio</h4>
                            <p className="card-text">portfolio website designed to showcase your skills, projects, and experiences in a captivating and professional manner.
Built with a blend of HTML5, CSS3, JavaScript and React.js Portfolio provides a dynamic platform for individuals to present their unique talents and
achievements to the world</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="https://i.pinimg.com/736x/08/d8/8e/08d88e71ca24aa04b5ed3ddb6b77824f.jpg" alt="Card image"></img>
                        <div className="card-body">
                            <h4 className="card-title">Realestate Website</h4>
                            <p className="card-text">Welcome to JK Real Estate, where innovation meets your dream home! Our
React.js-powered website offers a dynamic and user-friendly platform to
explore premium properties.
With React.js powering the backbone, delve into comprehensive property
details through dynamic components, ensuring an immersive exploration.</p>
                            <div className="text-center">
                                <a href="https://project-1-realestate-website.vercel.app/" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

               
        
    </section>

  )
}
