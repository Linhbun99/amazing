import React from 'react'
import { productData } from './fakedata'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'

const Product = () => {
    return (

        <div className='bg-white'>
            {/* Nav bar */}
            <div className='flex px-4 py-1 border-b shadow-md'>
                <span>1-24 of 346 results for "school supplies"</span>
                <span className='ml-auto'>Feature</span>
            </div>
            {/* Content */}
            <div class="flex flex-row">
                <div class="basis-72 shrink-0 p-4">
                    <ProductFilter />
                </div>
                <div className="p-4">
                    <span className='font-medium text-xl'>RESULTS</span>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-1'>
                        {
                            productData.map((x, idx) => {
                                return <div key={idx} className="col-span-1 border rounded"><ProductCard item={x} /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product