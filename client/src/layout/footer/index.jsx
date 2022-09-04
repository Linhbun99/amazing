import React from 'react';

const handleBackToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const Footer = () => {
    return (
        <React.Fragment>
            <button onClick={handleBackToTop} className='w-full py-4 bg-slate-600 hover:bg-slate-500 duration-200 text-white text-sm'>Back to top</button>
            <div className="grid grid-cols-4 px-52 py-10 gap-10 bg-gray-700 text-white">
                <div className="col-span-1">
                    <span className='font-bold'>Get to know us</span>
                    <ul className='text-sm'>
                        <li>Careers</li>
                        <li>About Amazone</li>
                        <li>Blog</li>
                        <li>Amazone Services</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <span className='font-bold'>Make Money with Us</span>
                    <ul className='text-sm'>
                        <li>Careers</li>
                        <li>About Amazone</li>
                        <li>Blog</li>
                        <li>Amazone Services</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <span className='font-bold'>Amazon Payment Product</span>
                    <ul className='text-sm'>
                        <li>Careers</li>
                        <li>About Amazone</li>
                        <li>Blog</li>
                        <li>Amazone Services</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <span className='font-bold'>Let Us Help You</span>
                    <ul className='text-sm'>
                        <li>Careers</li>
                        <li>About Amazone</li>
                        <li>Blog</li>
                        <li>Amazone Services</li>
                    </ul>
                </div>
            </div>
            <hr className='border border-gray-500' />
            <div className='flex justify-center space-x-4 bg-gray-700 text-whiten py-6 text-white'>
                <span>Amazone</span>
                <span>English</span>
                <span>$ USD - US Dollar</span>
                <span>United State</span>
            </div>
        </React.Fragment>
    )
}

export default Footer