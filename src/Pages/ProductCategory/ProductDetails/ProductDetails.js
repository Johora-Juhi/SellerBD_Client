import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const location = useLocation();
    const product = location.state;
    const { _id, name, image, conditionType, resalePrice, originalPrice, batteryHealth, yearsUsed, yearOfPurchase, sellerName, sellerImg, email, sellerPhone, sellerLocation, postTime, paid, status } = product;

    return (
        <div className='aboutBanner container mx-auto px-20 py-20'>
            <div className="grid grid-cols-2 gap-5">
                <div className='px-10'>
                    <h1 className='text-4xl font-semibold mb-8'>{name}</h1>
                    <h5 className='mb-7 text-base bg-orange-100 border border-orange-300 rounded-md inline px-5 py-3'><span className='text-center mr-1 font-semibold'>৳{resalePrice}</span> <span className='text-gray-400' style={{ textDecoration: 'line-through' }}>৳{originalPrice}</span> </h5>
                    <h2 className='font-semibold mt-10 mb-3 text-xl'>Product Specification</h2>
                    <div className='flex'>
                        <div className='border-r-2 border-gray-300 pr-5'>
                            {
                                product.ramRom &&
                             <>
                                <h3 className='text-sm text-gray-500'>RAM | ROM</h3>
                                <h4 className='font-semibold'>{product.ramRom}</h4></>
                            }
                        </div>
                        <div className='border-r-2 border-gray-300 px-5'>
                            {
                                product.processor &&
                               <>
                                <h3 className='text-sm text-gray-500'>Processor</h3>
                               <h4 className='font-semibold'>{product.processor}</h4></>
                            }
                        </div>
                        <div className='border-r-2 border-gray-300 px-5'>
                            {
product.camera &&
                                <>
                                <h3 className='text-sm text-gray-500'>Camera</h3>
                                <h4 className='font-semibold'>{product.camera}</h4>
                                </>
                            }
                        </div>
                        
                            {
product.sim &&
<div className='px-5'>
                                <h3 className='text-sm text-gray-500'>Sim</h3>
                            <h4 className='font-semibold'>{product.sim}</h4>
                            </div>
                            }
                        
                            {
product.screenSize &&
                            
                                <div className='px-5'>
                                <h3 className='text-sm text-gray-500'>Screen</h3>
                            <h4 className='font-semibold'>{product.screenSize}</h4>
                            </div>
                           
                            }
                        
                    </div>
                    <h2 className='font-semibold mt-10 mb-3 text-xl'>Condition</h2>
                    <div className='flex'>
                        <div className='border-r-2 border-gray-300 pr-5'>
                            <h3 className='text-sm text-gray-500'>Status</h3>
                            <h4 className='font-semibold'>{conditionType}</h4>
                        </div>
                        <div className='border-r-2 border-gray-300 px-5'>
                            {
                                product.scratchStatus && 
                                <>
                                <h3 className='text-sm text-gray-500'>Scratch</h3>
                            <h4 className='font-semibold'>{product.scratchStatus}</h4></>
                            }
                        </div>
                        <div className='px-5'>
                            {
product.connectivityIssue &&
                                <>
                                <h3 className='text-sm text-gray-500'>Connectivity Issue</h3>
                            <h4 className='font-semibold'>{product.connectivityIssue}</h4></>
                            }
                        </div>
                    </div>
                    <h2 className='font-semibold mt-10 mb-3 text-xl'>Battery Condition</h2>
                    <div className='flex'>
                        <div className='pr-5'>
                            <h3 className='text-sm text-gray-500'>Battery Health</h3>
                            <h4 className='font-semibold'>{batteryHealth}</h4>
                        </div>
                    </div>
                    <h2 className='font-semibold mt-10 mb-3 text-xl'>Used Time</h2>
                    <div className='flex'>
                        <div className='pr-5'>
                            <h3 className='text-sm text-gray-500'>Year Of Use</h3>
                            <h4 className='font-semibold mb-10'>{yearsUsed} Years</h4>
                        </div>
                    </div>
                    <div className='w-3/4 border-2 border-orange-400 rounded-tl-3xl rounded-br-3xl p-10'>
                        <div className='flex justify-evenly items-center'>
                            <img style={{ width: '100px' }} className="rounded-full" src={sellerImg} alt="" />
                            <div>
                                <h2 className='font-semibold mb-2'>{sellerName}</h2>
                                <h2 className='text-gray-500 text-xs mb-1'>Email: {email}</h2>
                                <h2 className='text-gray-500 text-xs mb-1'>Phone: {sellerPhone}</h2>
                                <h2 className='text-gray-500 text-xs'>Location: {sellerLocation}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;