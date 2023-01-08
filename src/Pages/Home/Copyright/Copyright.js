import React from 'react';
import payIcon from '../../../assets/images/home/payIcon.jpg';

const Copyright = () => {
    return (
        <div className='border border-gray-300'>
            <div className="container mx-auto px-20 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className='text-sm text-gray-600'>Copyright &#169; 2023 by Seller BD</h1>
                    </div>
                    <div>
                        <img src={payIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;