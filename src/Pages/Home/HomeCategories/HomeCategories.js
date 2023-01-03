import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import './HomeCategories.css'

const HomeCategories = () => {
    return (
        <div className=''>
            <div className="container mx-auto px-20 py-32">
                <h1 className='text-4xl font-semibold text-center'>Categories</h1>
                <div className="flex gap-5 space-between">
                    <div className='catIcon flex justify-center items-center mx-auto'>
                        <FaMobileAlt className='text-5xl'></FaMobileAlt>
                    </div>
                    <div className='catIcon flex justify-center items-center mx-auto'>
                        <FaMobileAlt className='text-5xl'></FaMobileAlt>
                    </div>
                    <div className='catIcon flex justify-center items-center mx-auto'>
                        <FaMobileAlt className='text-5xl'></FaMobileAlt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategories;