import React from "react";
import Navbar from '../components/Navbar'; // Import Navbar
export default function AboutUs() {

    return (
        <div>
            <Navbar active="About"/>
            <div className="h-fit bg-gradient-to-r from-green-700 to-blue-900"> 
                <h1 className="text-white font-black sm:text-4xl text-xl flex justify-center pt-40 pb-10">About US</h1>
                <div className="overflow-hidden flex justify-center">
                <img
                    src="aboutus.jpg" className="w-1/3 flex justify-center mx-auto object-cover rounded-lg shadow-md scale-110 transform transition-transform duration-500 hover:scale-125 hover:cursor-pointer"
                />
                </div>
                <p className="text-white align- text-center  w-1/3 mx-auto py-10">Kami merupakan tim yang bergerak di bidang web development yang berfokus pada pengembangan website yang responsif dan mudah dipelajari. 
                    Kami menggunakan bahasa pemrograman JavaScript, HTML, dan CSS untuk membuat website. Kami juga menggunakan framework seperti React dan Tailwind CSS untuk memudahkan pengembangan website.
                    Kami memastikan website kami responsif dan mudah dipelajari.

                </p>
            </div>
        </div>
    )
}