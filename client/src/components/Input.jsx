import React from 'react';

const Input = (props) => {
    const { className, left, right, placeholder } = props;
    return (
        <div className={`${className + ' ' + 'flex'}`}>
            {props.left}
            <input
                type="text"
                className='text-black grow p-2'
                placeholder={placeholder || ''}
            />
            {props.right}
        </div>
    )
}

export default Input