import React from 'react';
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";

const HomeAboutSection = () => {
    return (
        <div className='container mx-auto '>
            <div className="grid grid-cols-4 gap-5">
                <div className='flex gap-5 items-center justify-center'>
                    <div><FaTruck className='text-4xl text-yellow-400'></FaTruck></div>
                    <div>
                        <h2 className='text-2xl font-medium'>Free shipping</h2>
                        <h3 className='text-xl text-gray-500'>Shipping in 5 days</h3>
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <div><FaGift className='text-4xl text-yellow-400'></FaGift></div>
                    <div>
                        <h2 className='text-2xl font-medium'>Gift voucher</h2>
                        <h3 className='text-xl text-gray-500'>Surprise coupon voucher</h3>
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <div><FaMoneyCheckAlt className='text-4xl text-yellow-400'></FaMoneyCheckAlt></div>
                    <div>
                        <h2 className='text-2xl font-medium'>Money back</h2>
                        <h3 className='text-xl text-gray-500'>Refund within 30 days</h3>
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <div><FaSeedling className='text-4xl text-yellow-400'></FaSeedling></div>
                    <div>
                        <h2 className='text-2xl font-medium'>Safe payment</h2>
                        <h3 className='text-xl text-gray-500'>100% secure with us</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutSection;