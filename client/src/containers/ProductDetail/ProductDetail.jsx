import React from 'react';
import CustomerReview from './CustomerReview';
import ProductInfo from './ProductInfo';
import ProductPayment from './ProductPayment';
import ProductPreview from './ProductPreview';
import ProductQA from './ProductQA';


const ProductDetail = () => {
    return (
        <div className="bg-white p-4 space-y-2">
            <div className='flex'>
                <ProductPreview />
                <ProductInfo />
                <div className='shrink-0 w-60'>
                    <ProductPayment />
                </div>
            </div>

            <hr />

            <div className='w-2/3'>
                <ProductQA />
            </div>

            <hr />

            <CustomerReview />
        </div>

    )
}

export default ProductDetail