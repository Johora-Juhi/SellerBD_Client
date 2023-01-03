import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categoriesType')
        .then(res => res.json())
        .then(data => setCategories(data))
            
        }, [])
        console.log(categories);
    return (
        <div className='my-32'>
            <h1 className='text-4xl font-semibold text-center mb-24'>Categories</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 px-2 lg:px-28'>
                {
                    categories.map(category => <CategoriesCard
                        key={category.categoryId}
                        category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;