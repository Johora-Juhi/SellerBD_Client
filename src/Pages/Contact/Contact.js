import React from 'react';
import contact from '../../assets/images/contact.jpg'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStream } from 'react-icons/fa';
import './Contact.css'
import Navbar from '../Shared/Navbar/Navbar';

const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className='proBanner'>
            <Navbar></Navbar>
                <h1 className='text-7xl font-bold tracking-widest uppercase text-center mt-32 font text-white animate__animated animate__fadeInDown'>Contact Us</h1>
            </div>
            <div className='wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,176C320,192,400,256,480,256C560,256,640,192,720,186.7C800,181,880,235,960,261.3C1040,288,1120,288,1200,272C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L1440,0L1440,320L0,320Z"></path></svg> */}
        </div>
                <div><img className='w-3/5 mx-auto' src={contact} alt="" /></div>
                <div className=''>
                    <div class="snowflakes" aria-hidden="true">
                        <div class="snowflake">
                            ❅
                        </div>
                        <div class="snowflake">
                            ❅
                        </div>
                        <div class="snowflake">
                            ❆
                        </div>
                        <div class="snowflake">
                            ❄
                        </div>
                        <div class="snowflake">
                            ❅
                        </div>
                        <div class="snowflake">
                            ❆
                        </div>
                        <div class="snowflake">
                            ❄
                        </div>
                        <div class="snowflake">
                            ❅
                        </div>
                        <div class="snowflake">
                            ❆
                        </div>
                        <div class="snowflake">
                            ❄
                        </div>
                    </div>
                </div>
                <div className='p-20 bg-black'>
                    <div className="grid grid-cols-2 gap-16 items-center ">
                        <div>
                            <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=488&amp;height=261&amp;hl=en&amp;q=Port%20City%20University%20Chittagong+(Port%20City%20University)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                        <div className='p-4 border-2 border-slate-200 shadow-md mt-5'>
                            <div className='bg-slate-100 border-2 border-slate-200 -mt-10 -ml-10 py-7 px-10'>
                                <h1 className='text-4xl font-semibold tracking-widest'>GET IN TOUCH !</h1>
                                <div style={{ width: '190px', height: '3px', margin: '5px 0 20px 0', backgroundColor: 'orange' }}></div>
                                <div className='flex gap-2 items-center'>
                                    <div className='text-orange-500'><FaPhoneAlt></FaPhoneAlt></div>
                                    <div className='text-gray-600 font-light tracking-wider'> +880 1231 34323</div>
                                </div>
                                <div className='flex gap-2 items-center mt-3'>
                                    <div className='text-orange-500'><FaEnvelope></FaEnvelope></div>
                                    <div className='text-gray-600 font-light tracking-wider'> tahmina@sellBD.com</div>
                                </div>
                                <div className='flex gap-2 items-center mt-3'>
                                    <div className='text-orange-500'><FaMapMarkerAlt></FaMapMarkerAlt></div>
                                    <div className='text-gray-600 font-light tracking-wider'> 9R55+PP8, S Khulshi Rd, Chattogram
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center mt-3'>
                                    <div className='text-orange-500'><FaStream></FaStream></div>
                                    <div className='text-gray-600 font-light tracking-wider'>www.sellBdBangladesh.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Contact;