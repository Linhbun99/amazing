import React from 'react';
import ProductInfo from './ProductInfo';
import ProductPayment from './ProductPayment';
import ProductPreview from './ProductPreview';


const ProductDetail = () => {
    return (
        <div className='p-4 bg-white flex'>
            <ProductPreview />
            <ProductInfo />
            <div className='shrink-0 w-60'>
                <ProductPayment />
            </div>
        </div>
    )
}

export default ProductDetail