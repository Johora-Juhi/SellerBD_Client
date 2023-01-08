import React from 'react';
import './OurServices.css';
import img from '../../../assets/images/about/aboutLaptop.jpg';

const OurServices = () => {
    return (
        <div style={{ height: '960px' }} className='bg-black'>
            <div className="container mx-auto px-20 py-24">
                <div className='text-center'>
                    <h3 className='rainbow-text text-center inline'>OUR SERVICES</h3>
                </div>
                <h2 className='text-white text-center text-5xl mt-10'>What We Do?</h2>
                <div className='flex'>
                    <div style={{ backgroundColor: '#1f1f1f' }} className='w-5/6 py-28 px-16 mt-20'>
                        <div className='w-3/5'>
                            <h1 className='text-white text-3xl font-semibold tracking-widest mb-5'>Sell, Buy, Use!</h1>
                            <h2 className='mb-2 text-gray-500 font-light tracking-wide'>Sell to <span className='text-yellow-400'>Seller BD</span> and you'll get the most money, GUARANTEED. Free shipping, Friendly people, Fast payments & Fantastic Reviews.</h2>
                            <button className="myBtn mt-5">SEE OUR PRODUCTS ➔</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 -mt-80">
                    <div></div>
                    <div className='border border-yellow-400 p-4'><img src={img} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;