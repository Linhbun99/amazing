import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';

const SingleCarousel = (props) => {
    const { data } = props

    return (
        <Carousel
            className=''
            rightArrow={
                <span className='absolute top-[20%] right-8'>
                    <FontAwesomeIcon className='text-gray-500 hover:text-gray-700' size='3x' icon={faAngleRight} />
                </span>
            }
            leftArrow={
                <span className='absolute top-[20%] left-8 z-10'>
                    <FontAwesomeIcon className='text-gray-500 hover:text-gray-700' size='3x' icon={faAngleLeft} />
                </span>
            }
            infinite={true}
            show={1}
            slide={1}
            transition={0.5}
        >
            {
                data.map((item, idx) => {
                    return <div key={idx} className=''>
                        <img className='' src={item.img} alt="" />
                    </div>
                })
            }
        </Carousel>
    )
}

export default SingleCarousel