import React from 'react';
import './CustomerLove.css';
import colon from '../../../assets/images/home/left-quote.png'

const CustomerLove = () => {
    return (
        <div className='cLove'>
            <div className="container mx-auto px-20 py-32 text-center">
                <h1 className='text-4xl font-semibold'>Customer Love</h1>
                <img src={colon} alt="" />
                <p className='w-3/4 m-auto py-6 text-xl text-gray-500 font-light'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <h3 className='text-xl'><span className='font-semibold'>Davis Smith</span> <br /><span className='text-gray-600'>Managing Director</span> </h3>
            </div>
        </div>
    );
};

export default CustomerLove;