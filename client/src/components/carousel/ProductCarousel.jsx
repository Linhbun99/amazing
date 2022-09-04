import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';

const ProductCarousel = (props) => {
    const { data, title, show = 3, slide = 3, infinite = false } = props;
    return (
        <div className='p-6 bg-white'>
            <span className='font-bold text-2xl'>{title}</span>
            <Carousel
                className='relative mt-2'
                rightArrow={
                    <span className='absolute top-10 right-0 rounded-l bg-white px-4 py-8 '>
                        <FontAwesomeIcon className='text-gray-500 hover:text-gray-700' size='2x' icon={faAngleRight} />
                    </span>
                }
                leftArrow={
                    <span className='absolute top-10 left-0 rounded-r bg-white px-4 py-8 z-10'>
                        <FontAwesomeIcon className='text-gray-500 hover:text-gray-700' size='2x' icon={faAngleLeft} />
                    </span>
                }
                infinite={infinite}
                show={show}
                slide={slide}
                transition={0.5}
            >
                {
                    data.map((item, idx) => {
                        return <div key={idx} className='bg-red-400 h-40 mr-4'>
                            <img className='mx-auto' src={item.img} alt="" />
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}

export default ProductCarousel