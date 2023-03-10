import React, { useEffect, useState } from 'react';
import AdvertiseItemCard from '../AdvertiseItemCard/AdvertiseItemCard';
import './AdvertiseItem.css'

const AdvertiseItem = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertiseproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.length ?
                <div className='advertiseBackground my-32 flex flex-wrap justify-around gap-8 border-y-2 border-primary'>
                    {
                        products.map(product => <AdvertiseItemCard
                            key={product._id}
                            product={product}></AdvertiseItemCard>)
                    }
                </div>
                :
                <></>
            }
        </div>
    );
};

export default AdvertiseItem;