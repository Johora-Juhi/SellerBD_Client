import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='border-t-4 border-yellow-500'>
            <div className="container mx-auto px-20 py-10 border-">
                <div className="grid grid-cols-3 gap-5 justify-center">
                    <div className='ml-40'>
                        <h1 className='text-xl mb-3 font-semibold'>Follow Us</h1>
                        <ul>
                            <li className='text-sm text-gray-600 flex items-center gap-3 mb-1'><FaFacebook></FaFacebook>Facebook</li>
                            <li className='text-sm text-gray-600 flex items-center gap-3 mb-1'><FaInstagram></FaInstagram>Instagram</li>
                            <li className='text-sm text-gray-600 flex items-center gap-3 mb-1'><FaTwitter></FaTwitter>Twitter</li>
                            <li className='text-sm text-gray-600 flex items-center gap-3'><FaWhatsapp></FaWhatsapp>Whatsapp</li>
                        </ul>
                    </div>
                    <div className='ml-40'>
                        <h1 className='text-xl mb-3 font-semibold'>Pages</h1>
                        <ul>
                            <li  className='text-sm text-gray-600 mb-1'><Link to='/'>Home</Link></li>
                            <li className='text-sm text-gray-600 mb-1'><Link to='/about'>About</Link></li>
                            <li className='text-sm text-gray-600 mb-1'><Link to='/contact'>Contact</Link></li>
                            <li className='text-sm text-gray-600'><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <div className='ml-40'>
                        <h1 className='text-xl mb-3 font-semibold'>Categories</h1>
                        <ul>
                            <li className='text-sm text-gray-600 mb-1'><Link to={`category/01`}>Mobile</Link></li>
                            <li className='text-sm text-gray-600 mb-1'><Link to={`category/02`}>Tablet</Link></li>
                            <li className='text-sm text-gray-600 mb-1'><Link to={`category/03`}>Laptop</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;