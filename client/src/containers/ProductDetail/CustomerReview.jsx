import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import Avatar from '../../components/Avatar';
const review = [
    { userName: "user name 1", tier: null },
    { userName: "user name 2", tier: "contributer 1" },
    { userName: "user name 3", tier: "contributer 2" },
    { userName: "user name 4", tier: null },
]
const data = [
    { title: 5, value: 78 },
    { title: 4, value: 13 },
    { title: 3, value: 6 },
    { title: 2, value: 1 },
    { title: 1, value: 2 },
]

const Vote = (props) => {
    const { title, value } = props;

    return (
        <div className='flex items-center space-x-2 mb-2'>
            <span className='text-blue-500 w-10'>{title} star</span>

            <div className="relative w-1/2 bg-gray-100 rounded h-5 border border-gray-300">
                <div className="absolute -top-[1px] -left-[1px] bg-orange-400 h-5 rounded-l border border-orange-600" style={{ width: `${value}%` }} />
            </div>

            <span className='text-blue-500'>{value}%</span>
        </div>
    )
}

const CustomerReview = () => {
    return (
        <div className='grid grid-cols-3 gap-4 bg-white'>
            <div className='col-span-1 space-y-2'>
                <div className='font-bold text-2xl'>Customer Reviews</div>
                <div className='flex space-x-1'>
                    <Rating
                        fractions={2}
                        initialRating={3}
                        emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                    />
                    <span>3 out of 5</span>
                </div>
                <div className="text-gray-500">4006 global ratings</div>
                {
                    data.map(((item, idx) => {
                        return <div key={idx}>
                            <Vote title={item.title} value={item.value} />
                        </div>
                    }))
                }
            </div>
            <div className='col-span-2'>
                <div className='font-bold text-lg'>Reviews</div>
                {
                    review.map((item, idx) => {
                        return <div className='my-6 space-y-2' key={idx}>
                            <Avatar userName={item.userName} tier={item.tier} />

                            <div>
                                <div className='flex space-x-1'>
                                    <Rating
                                        fractions={2}
                                        initialRating={3}
                                        emptySymbol={<FontAwesomeIcon className='text-yellow-400' icon={faStar} />}
                                        fullSymbol={<FontAwesomeIcon className='text-yellow-600' icon={faStar} />}
                                    />
                                    <span className='font-bold'>Chủ đề bình luận này</span>

                                </div>
                                <div className='text-gray-500'>Reviewed on September 1, 2022</div>
                                <div className='text-gray-500'>Color: Assorted Color</div>
                            </div>
                            <div className='w-2/3'>I am on the fence about this rating. On the one hand, they seem sturdy, they are a great deal for the price, I love the colors and they are very useful. On the other hand... whoever built them shrink wrapped the board with lumpy cellophane and THEN bolted the clip part to the board, so no matter how hard you try, you have these wispy trails of cellophane peeking out from under the clip and under your paper, under the back. It varies from a bit ugly in the back, to downright annoying when you are trying to write. The three that we needed, I spent a VERY long time getting *most* of the cellophane out of the way so it only occasionally catches. Would my cheap self buy these again? Probably, but I would complain the entire time. Just cellophane wrap them AFTER you install the clip!!!</div>
                            <div className='text-gray-500'>2 people found this helpful</div>
                            <button className='px-4 py-1 rounded border border-gray-300 shadow hover:bg-gray-100 transition duration-150 '>Helpful</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CustomerReview