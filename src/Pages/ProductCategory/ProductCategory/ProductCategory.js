import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ProductCategory.css';
import 'animate.css';
import BookingModal from '../BookingModal/BookingModal';
import ProductsCard from '../ProductsCard/ProductsCard';
import Navbar from '../../Shared/Navbar/Navbar';

const ProductCategory = () => {
    const products = useLoaderData();
    const [avaiableProducts, setAvailabeProducts] = useState(null);
    return (
        <div>
            
            <div className='proBanner'>
            <Navbar></Navbar>
                <h1 className='text-7xl font-bold tracking-widest uppercase text-center mt-32 font text-white animate__animated animate__fadeInDown'>wanna have one!</h1>
            </div>
            <div className='wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,176C320,192,400,256,480,256C560,256,640,192,720,186.7C800,181,880,235,960,261.3C1040,288,1120,288,1200,272C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L1440,0L1440,320L0,320Z"></path></svg> */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-2 lg:mx-32 py-20'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                        setAvailabeProducts={setAvailabeProducts}>
                    </ProductsCard>)
                }
            </div>
            {
                avaiableProducts &&
                <BookingModal
                    avaiableProducts={avaiableProducts}
                    setAvailabeProducts={setAvailabeProducts}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductCategory;