import React from 'react';

const Avatar = (props) => {
    const { userName, tier } = props;

    return (
        <div className='flex items-center space-x-2'>
            <img src="./images/avatar.png" alt="" className='rounded-full w-8 h-8 border border-gray-300' />
            <span>{userName}</span>
            <span className='text-green-500'>{tier}</span>
        </div>
    )
}

export default Avatar