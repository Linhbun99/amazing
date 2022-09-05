import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { filterData } from './fakedata';

const SelectList = (props) => {
    const { data } = props;
    return (
        <ul>
            {data.map((item, idx) => {
                return <li key={idx}>{item}</li>
            })}
        </ul>
    )
}

const SelectBox = (props) => {

    const { data } = props;
    return (
        <ul>
            {data.map((item, idx) => {
                return <li key={idx} className="flex items-center">
                    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300" />
                    <label for="link-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300">{item}</label>
                </li>
            })}
        </ul>
    )
}

const SelectRate = () => {
    return (
        <div>
            <div className="flex text-sm items-center space-x-1">
                <Rating
                    readonly
                    initialRating={4}
                    emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                />
                <span> & up</span>
            </div>
            <div className="flex text-sm items-center space-x-1">
                <Rating
                    readonly
                    initialRating={3}
                    emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                />
                <span> & up</span>
            </div>
            <div className="flex text-sm items-center space-x-1">
                <Rating
                    readonly
                    initialRating={2}
                    emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                />
                <span> & up</span>
            </div>
            <div className="flex text-sm items-center space-x-1">
                <Rating
                    readonly
                    initialRating={1}
                    emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                />
                <span> & up</span>
            </div>
        </div>

    )
}


const ProductFilter = () => {
    return (
        <div className='space-y-4'>
            {filterData.map((item, idx) => {
                if (item.type === "Department") {
                    return <div>
                        <span className='font-bold'>{item.name}</span>
                        <SelectList data={item?.data} />
                    </div>
                }

                if (item.type === "Review") {
                    return <div>
                        <span className='font-bold'>{item.name}</span>
                        <SelectRate />
                    </div>
                }

                if (item.type === "Brand") {
                    return <div>
                        <span className='font-bold'>{item.name}</span>
                        <SelectBox data={item?.data} />
                    </div>
                }

                if (item.type === "Price") {
                    return <div>
                        <span className='font-bold'>{item.name}</span>
                        <SelectList data={item?.data} />
                    </div>
                }
            })}
        </div>
    )
}

export default ProductFilter