import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';
import Rating from 'react-rating';

const RecomendationCarousel = (props) => {
    const { data, title, show = 3, slide = 3, infinite = false } = props;
    return (
        <div className='p-6 bg-white'>
            <span className='font-bold text-2xl mb-4'>{title}</span>
            <Carousel
                className='flex items-center mt-2'
                rightArrow={
                    <span className='flex items-center justify-center rounded bg-white p-3 border hover:bg-gray-100 duration-200'>
                        <FontAwesomeIcon className='text-gray-700' icon={faAngleRight} />
                    </span>
                }
                leftArrow={
                    <span className='flex items-center justify-center rounded bg-white p-3 border hover:bg-gray-100 duration-200 z-10'>
                        <FontAwesomeIcon className='text-gray-700' icon={faAngleLeft} />
                    </span>
                }
                infinite={infinite}
                show={show}
                slide={slide}
                transition={0.5}
            >
                {
                    data.map((item, idx) => {
                        return <div key={idx} className='mx-2 w-44 p-2'>
                            <img className='h-40 w-40' src={item.img} alt="" />
                            <div className='text-sm truncate'>{item.name}</div>
                            <div className='text-xs'>{item.author}</div>
                            <div className='text-gray-700 text-xs'>{item.type}</div>
                            <div className="flex text-sm items-center">
                                <Rating
                                    fractions={2}
                                    initialRating={item.rate}
                                    emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                                />
                                <span className='text-xs ml-1 mt-0.5'>{item.totalRate}</span>
                            </div>
                            <div>$ {item.cost}</div>
                            <div className='text-xs'>$ {item.costWithShipping} shipping</div>


                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}

export default RecomendationCarousel