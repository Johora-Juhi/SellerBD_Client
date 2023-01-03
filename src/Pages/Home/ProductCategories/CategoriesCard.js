import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesCard.css';

const CategoriesCard = ({ category }) => {
    const { categoryName, categoryImage, categoryId } = category;
    return (
       <Link to={`category/${categoryId}`}>
        <div className='relative overflow-hidden shadow-md'>
            <img className='zoom' src={categoryImage} alt="" />
            <h1 className=' text-xl lg:text-3xl absolute top-3/4 right-8 tracking-wide'>{categoryName}</h1>
            {/* <p className='text-gray-500 text-sm underline absolute top-32 right-8'>SHOP NOW</p> */}
        </div>
        </Link>
    );
};

export default CategoriesCard;