import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import Rating from 'react-rating';

const ProductCard = (props) => {
    const { item } = props;
    return (
        <div className=''>
            <div className="w-full">
                <img src={item.img} alt="" />
                <div className="p-2">
                    <span>{item.name}</span>
                    <div className="flex text-sm items-center">
                        <Rating
                            fractions={2}
                            initialRating={item.rate}
                            emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                        />
                        <span className='text-xs ml-1 mt-0.5'>{item.totalRate}</span>
                    </div>
                    <div>$ {item.lowCost}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard