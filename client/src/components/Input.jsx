import React from 'react'

const Input = (props) => {
    return (
        <div className='flex w-180'>
            {props.left}
            <input type="text" className='text-black grow p-2' />
            {props.right}
        </div>
    )
}

export default Input