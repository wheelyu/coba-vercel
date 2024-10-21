import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
        <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Nama Website */}
            <div className="mb-4 md:w-1/4 flex flex-row">
            <img
                            className="block h-28 w-auto rounded-full mr-6"
                            src="H.png"
                            alt="Workflow"
                        />
                <p className="text-sm">this website is fungsionally use only for learning, not for commercial use, but if you wanna to use it for commercial purpose, please contact me</p>
            </div>
            {/* Link Sosial Media */}
            <div className=" w-96  text-white flex flex-col justify-between items-center">
                <div className="font-black text-xl">
                    <h1>My Social media</h1>
                </div>
                <div className='py-4 space-x-6'>
                <a href="https://www.linkedin.com/in/harun-abdulkarim-khafid-398669180/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all ease-in-out duration-500">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://x.com/seisunz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all ease-in-out duration-500">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/harun_abdlkrm/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all ease-in-out duration-500">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </div>
            </div>
            {/* Informasi Kontak */}
            <div className="mb-4 md:mb-0 ">
                <div className='flex flex-col'>
                <h1 className="text-xl font-bold">Here for more information</h1>

                </div>
                <p className='text-sm'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 " />
                Institut Teknologi Sumatera, Lampung Selatan
                </p>
                <p className='text-sm'>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Phone: 081260572765
                </p>
                <div className='flex flex-row mt-4 shadow-2xl'>
                <input type="email" name="username" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6" placeholder="enter your email"/>
                <button 
                className="bg-green-700 text-white p-2 rounded-md relative flex items-center justify-center align-middle h-10 
                hover:bg-green-600 transition-all ease-in-out duration-500">
                Catch me
                </button>
                </div>
            </div>

            
            </div>
        </div>
            
        </footer>
        <div className="text-center bg-green-900 text-white py-4 text-sm">
            <h1>Copyright © 2024 - Harun-React</h1>
        </div>
        </>
    );
};

export default Footer;
