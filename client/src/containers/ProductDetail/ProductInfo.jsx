import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { product } from './fakedata';

// export const product = {
//     name: "Amazon Basics Plastic Clipboards with Metal Clip, Assorted Colors, Pack of 6",
//     store: "Amazone Basics Store",
//     rate: 4.5,
//     totalRate: 999,
//     answerQuestion: 21,
//     tag: "Best seller",
//     tagField: "plastic clipboards",
//     currency: "USD",
//     currencyLabel: '$',
//     fee: 30,
//     description: "Plastic clipboard (6-pack) conveniently holds forms and documents and provides a sturdy, portable writing surface Metal clip mechanism measures 5-3/4 inches wide; keeps papers easily and securely attached",
//     info: {
//         color: [{
//             name: "Classic",
//             img: "./images/thumbnail1.png"
//         },
//         {
//             name: "Color",
//             img: "./images/thumbnail2.png"
//         },
//         {
//             name: "Metal",
//             img: "./images/thumbnail1.png"
//         }],
//         size: ["Legal", "Letter"],
//         pattern: ["Clipboards", "Clipboards + Pencils", "Clipboards + Papper Pads"],
//         cost: [
//             {
//                 color: ["Classic", "Color", "Metal"],
//                 size: ["Legal"],
//                 value: 20
//             },
//             {
//                 color: ["Classic", "Color", "Metal"],
//                 size: ["Letter"],
//                 value: 25
//             }
//         ]
//     }


const ProductInfo = () => {
    const { info } = product;
    return (
        <div className='px-4'>
            <div className='space-y-1 mb-2'>
                <div className='text-2xl'>{product.name}</div>
                <span>{product.store}</span>
                <div className="flex space-x-2">
                    <Rating
                        readonly
                        initialRating={product.rate}
                        emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                    />
                    <span>{product.totalRate} ratings | {product.answerQuestion} answered questions</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className='bg-red-400 -skew-x-12 px-2'>{product.tag}</span>
                    <span className='text-xs'>for "{product.tagField}"</span>
                </div>
            </div>
            <hr />

            <div className='space-y-3 mb-2'>
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

                <div className='space-y-2'>
                    <div>
                        <span>Color: </span>
                        <span className='font-bold'>Assorted Color</span>
                    </div>
                    <div className="flex space-x-2">
                        {info.color.map((item, idx) => {
                            return <div key={idx} className='border'><img src={item.img} alt="" /></div>
                        })}
                    </div>
                </div>

                <div className='space-y-2'>
                    <div>
                        <span>Size: </span>
                        <span className='font-bold'>Letter</span>
                    </div>
                    <div className="flex space-x-2">
                        {info.size.map((item, idx) => {
                            return <div key={idx} className='border px-3 py-1'>{item}</div>
                        })}
                    </div>
                </div>

                <div className='space-y-2'>
                    <div>
                        <span>Pattern: </span>
                        <span className='font-bold'>Clipboards</span>
                    </div>
                    <div className="flex space-x-2">
                        {info.pattern.map((item, idx) => {
                            return <div key={idx} className='border px-3 py-1'>{item}</div>
                        })}
                    </div>
                </div>

                <div>
                    {product.description}
                </div>

            </div>
            <hr />
        </div>
    )
}

export default ProductInfo