import React from 'react';
import { product } from './fakedata';

const ProductPayment = () => {
    const { info } = product;

    return (
        <div className='border rounded-lg p-4 space-y-4'>
            <div className='space-x-2'>
                <span className='text-red-500 text-2xl'>-{info.cost[0].discount} %</span>
                <span className=''>
                    <span className='mb-2 text-xs'>{product.currencyLabel} </span>
                    <span className='text-2xl'>{Math.round(info.cost[0].originValue * (100 - info.cost[0].discount) / 100)}</span>
                </span>
            </div>
            <div className='space-x-2'>
                <span>List price:</span>
                <span className='line-through'>{product.currencyLabel}{info.cost[0].originValue}</span>
            </div>
            <span className='text-gray-500'>{product.currencyLabel}{product.fee} Shipping & Import Fees Deposit to Vietnam</span>
            <div className='flex space-x-2'>
                <span>Delivery</span>
                <span className='font-bold'>Monday, October 10</span>
            </div>
            <div className='text-xs'>Deliver to Vietnam</div>
            <div className='text-green-600 text-xl'>In Stock.</div>
            <div className='space-y-2'>
                <div className='grow bg-yellow-400 rounded-full py-2 text-center transition hover:bg-yellow-500 duration-200'>Add to Cart</div>
                <div className='grow bg-orange-400 rounded-full py-2 text-center transition hover:bg-orange-500 duration-200'>Buy Now</div>
            </div>
        </div>
    )
}

export default ProductPayment