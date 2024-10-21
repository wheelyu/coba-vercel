import React from "react";
import Navbar from '../components/Navbar'; // Import Navbar
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
export default function WelcomePage() {

    return (
        <div className="bg-gradient-to-b from-green-700 to-blue-900 h-screen">
            <Navbar active="Home"/>
            <h1 className="text-white sm:text-4xl text-xl flex justify-center pt-40 pb-10"><p className="text-green-200 sm:text-6xl text-3xl font-black border-b-4 border-green-200 mr-4 animate-pulse">Welcome </p> to my website</h1>
            
            <div className="flex justify-center">
                <p className="text-white  flex justify-center text-center sm:w-full w-96 ">if you have any problem with website development, you are in the right place. </p>
            </div>
            <div
                className="overflow-hidden flex justify-center"
                >
                <img
                    src="fix.jpg"
                    className="sm:w-96 w-64  object-cover rounded-lg shadow-md scale-110 transform transition-transform duration-500 hover:scale-150 hover:cursor-pointer image"
                />
            </div>
            <div className="flex justify-center ">
            <p className="text-white  flex justify-center mt-4 sm:w-full w-80">You can just hit this button, to contact me 
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-white  flex justify-center mt-1 ml-5"/> 
                <Link to={'/Contact'} className="bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium ml-5 hover:bg-green-600 transition-all ease-in-out duration-500">Contact</Link>
                
            </p>
            </div>
        </div>
    )
}