import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapLocation} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/contact.css"

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

 
 
  return (
    <section id="contact" className="relative">
      <h2 className='text-black' id='title'>CONTACT</h2>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6"id='main'>
              <p className="mt-1">
                <FontAwesomeIcon icon={faMapLocation} /> Chennai,Tamilnadu
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-1 lg:mt-0">
              <a className="text-indigo-400 leading-relaxed">
                <FontAwesomeIcon icon={faEnvelope} />  jesonantojoy@gmail.com
              </a>
              <br/>
              <div className="lg:w-1/2 px-6 mt-3" >
              <p className="leading-relaxed"><FontAwesomeIcon icon={faPhone} /> +91-9566628303</p>
              </div>
            </div>
          </div>
        </div>
        
        
        <form className='form'>
         
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-black focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
     
    </section>

  );
}

