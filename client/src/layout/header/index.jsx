import { faBars, faCaretDown, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LANGUAGES, NAV_LINK_ARR } from './data';
import Search from './Search';


const Header = () => {
    return (
        <React.Fragment>
            <div className='bg-slate-900 h-16 flex items-center py-2 px-4 text-white space-x-8'>
                <img className='h-10' src='./images/logo5.png' alt='logo' />

                {/* Chọn địa điểm giao hàng */}
                <button>
                    <div className='text-xs text-right'>Deliver to</div>
                    <div className='text-sm font-bold'>
                        <FontAwesomeIcon icon={faLocationDot} className='px-1' />
                        Vietnam
                    </div>
                </button>

                {/* Tìm kiếm */}
                <Search />

                {/* Chọn ngôn ngữ */}
                <div className="group inline-block relative mt-3 py-2">
                    <button>
                        <span className="mr-1 text-sm font-bold">EN</span>
                        <FontAwesomeIcon size='xs' icon={faCaretDown} />
                    </button>
                    <div className="absolute mt-2 hidden text-black bg-white rounded p-3 group-hover:block z-10 w-60">
                        <span className='text-xs font-bold'>Change language</span>
                        <hr className='my-2' />
                        {
                            Object.keys(LANGUAGES).map((key, idx) => {
                                return <div class="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{`${LANGUAGES[key]} - ${key}`}</label>
                                </div>
                            })
                        }
                    </div>
                </div>

                {/* Tài khoản */}
                <div className="group inline-block relative py-2">
                    <button className='flex items-center'>
                        <span className='mr-1'>
                            <div className='text-xs text-left'>Hello, sign in</div>
                            <div className='text-sm font-bold'>Account & Lists</div>
                        </span>
                        <FontAwesomeIcon size='xs' icon={faCaretDown} />
                    </button>
                    <div className="absolute mt-2 -left-64 hidden text-black bg-white rounded p-5 group-hover:block">
                        <div className="text-center mb-4">
                            <button className='bg-yellow-500 hover:bg-yellow-600 duration-100 py-1 px-20 rounded'>Sign in</button>
                            <div className='text-xs my-2'>
                                <span>New customer?</span>
                                <a href='#'>Start here.</a>
                            </div>
                            <hr />
                        </div>
                        <div className='flex'>
                            <div className='w-60 border-r mr-4'>
                                <span className='font-bold'> Your lists</span>
                                <ul>
                                    <li><a className='text-xs' href="">Create a list</a></li>
                                    <li><a className='text-xs' href="">Create a list</a></li>
                                    <li><a className='text-xs' href="">Create a list</a></li>
                                </ul>
                            </div>
                            <div className='w-64'>
                                <span className='font-bold'> Your account</span>
                                <ul>
                                    <li><a className='text-xs' href="">Create a list</a></li>
                                    <li><a className='text-xs' href="">Create a list</a></li>
                                    <li><a className='text-xs' href="">Create a list</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <button >
                    <div className='text-xs text-left'>Returns</div>
                    <div className='text-sm font-bold'>& Orders</div>
                </button>

                <button className='flex relative'>
                    <FontAwesomeIcon className='z-10' icon={faCartShopping} size='2x' />
                    <span className='absolute left-4 -top-0.5 z-20 font-bold text-yellow-600'>0</span>
                    <div className='text-sm font-bold mt-auto'>Cart</div>
                </button>
            </div>

            <div className='flex bg-slate-800 h-9 space-x-4 px-4 items-center text-white text-sm'>
                <button className='font-bold space-x-1'>
                    <FontAwesomeIcon icon={faBars} />
                    <span>All</span>
                </button>
                {
                    NAV_LINK_ARR.map((item) => <span>{item.title}</span>)
                }
            </div>
        </React.Fragment>
    )
}

export default Header