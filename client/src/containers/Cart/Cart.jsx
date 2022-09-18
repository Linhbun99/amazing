import React from 'react';
import { product } from '../ProductDetail/fakedata';

const arr = [1, 2, 3, 4];

const Cart = () => {
    return (
        <div className='grid grid-cols-5 gap-4 p-4'>
            <div className="col-span-4 p-4 bg-white">
                <div className='text-3xl'>Shopping Cart</div>
                <div className="text-right">Price</div>
                <hr />
                {
                    arr.map((x, idx) => {
                        return (
                            <div>
                                <div key={idx} className='flex mt-2 mb-4'>
                                    <img src="./images/product_image.png" alt="" className='w-48 h-48' />
                                    <div className='mx-2'>
                                        <div className='text-lg'>{product.name}</div>

                                        <div className="flex items-center space-x-2">
                                            <span className='bg-red-400 -skew-x-12 px-2'>{product.tag}</span>
                                            <span className='text-xs'>for "{product.tagField}"</span>
                                        </div>
                                        <div className="text-xs text-green-700">In stock</div>
                                        <div className="flex space-x-1 text-xs">
                                            <input type="checkbox" />
                                            <div>This is a gift</div>
                                        </div>
                                    </div>
                                    <div className='font-bold text-lg ml-auto'>$ {product.info.cost[0].discount}</div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
            <div className="col-span-1 p-4 bg-white">
                <div className='text-lg'>Subtotal (5 items):
                    <span className='font-bold'> $49.23</span>
                </div>
                <div className="flex space-x-1">
                    <input type="checkbox" />
                    <div>This order contains a gift</div>
                </div>
                <button className='bg-yellow-400 py-1 my-3 w-full rounded hover:bg-yellow-500 duration-150 '>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default Cart