import React from 'react';

const CategoryCard = (props) => {
    const { title, img, action, link } = props;

    return (
        <div className='bg-white p-6'>
            <span className="font-bold text-2xl">{title}</span>
            <img src={img} className="my-4 h-72"></img>
            <a href="#" className='text-blue-400'>{action}</a>
        </div>
    )
}

export default CategoryCard