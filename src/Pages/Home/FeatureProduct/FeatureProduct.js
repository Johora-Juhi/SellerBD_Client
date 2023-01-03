import React from 'react';
import './FeatureProduct.css';
import f1 from '../../../assets/images/home/f1.png';
import f2 from '../../../assets/images/home/f2.png';
import f3 from '../../../assets/images/home/f3.png';

const FeatureProduct = () => {
    return (
        <div className=''>
            <div className="container mx-auto px-20 pb-32 pt-16">
                <h1 className='text-4xl font-semibold text-center'>Feature Product</h1>
                <div className="grid grid-cols-3 gap-5 justify-center mt-24">
                    <div>
                        <img className='w-3/4 mx-auto' src={f1} alt="" />
                        <h3 className='text-center font-semibold mt-7 text-lg'>Large Tablet</h3>
                        <h5 className='text-center mt-1'><span className='text-center mr-1 font-semibold'>৳74,000</span> <span className='text-gray-500' style={{ textDecoration: 'line-through' }}>৳ 1,20,000</span> </h5>
                    </div>
                    <div>
                        <img className='w-3/4 mx-auto' src={f2} alt="" />
                        <h3 className='text-center font-semibold mt-7 text-lg'>Smart Phone</h3>
                        <h5 className='text-center mt-1'><span className='text-center mr-1 font-semibold'>৳14,500</span> <span className='text-gray-500' style={{ textDecoration: 'line-through' }}>৳ 32,000</span> </h5>
                    </div>
                    <div>
                        <img className='w-3/4 mx-auto' src={f3} alt="" />
                        <h3 className='text-center font-semibold mt-7 text-lg'>Tablet Keyboard</h3>
                        <h5 className='text-center mt-1'><span className='text-center mr-1 font-semibold'>৳95,000</span> <span className='text-gray-500' style={{ textDecoration: 'line-through' }}>৳ 1,45,000</span> </h5>
                    </div>
                </div>
                <div className='text-center mt-20'>
                    <button className='myBtn'>SEE ALL PRODUCTS</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;