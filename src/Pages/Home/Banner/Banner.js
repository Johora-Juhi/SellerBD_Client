import React from 'react';
import './Banner.css';
import mobileImage from '../../../assets/images/home/bannerImage.png';

const Banner = () => {
    return (
        <>
            <div className='bannerBack'>
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div>
                            <h1 className='rainbow-text'>WELCOME TO SELLER BD</h1>
                            <h2 className='text-white font-semibold text-7xl my-7 tracking-wider'>Bringing Your Gadgets Back to Life</h2>
                            <button className="myBtn mt-5">GET STARTED ➔</button>
                        </div>
                        <div>
                            <img className='w-3/4 helloImage' src={mobileImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,32L24,64C48,96,96,160,144,192C192,224,240,224,288,192C336,160,384,96,432,80C480,64,528,96,576,90.7C624,85,672,43,720,48C768,53,816,107,864,133.3C912,160,960,160,1008,144C1056,128,1104,96,1152,90.7C1200,85,1248,107,1296,96C1344,85,1392,43,1416,21.3L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </div>
        </>
    );
};

export default Banner;