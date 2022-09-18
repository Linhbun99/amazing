import { faCaretDown, faCaretUp, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Input from '../../components/Input';

const data = [1];

const ProductQA = () => {
  return (
    <div>
      <div className='text-2xl'>Customer questions & answers</div>
      <div>
        <Input
          placeholder='Have a question? Search for answers'
          className='border border-gray-300 rounded'
          right={
            <button className='bg-yellow-500 hover:bg-yellow-600 duration-200 py-2 px-3 text-black rounded-r'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          }
        />
        {
          data.map((x) => {
            return <QA />
          })
        }
      </div>
    </div>
  )
}

const QA = () => {
  return (
    <div className="flex">
      {/* vote */}
      <div className='px-4 my-2 text-center justify-center border-r border-gray-300'>
        <FontAwesomeIcon icon={faCaretUp} size="2x" className='text-gray-500 hover:text-orange-500 duration-150 transition-all' />
        <div>3</div>
        <div>votes</div>
        <FontAwesomeIcon icon={faCaretDown} size="2x" className='text-gray-500 hover:text-orange-500 duration-150 transition-all' />
      </div>

      {/* Qa */}
      <div className="p-2">
        <div className="flex mb-2">
          <div className="w-24 shrink-0 font-bold">Question:</div>
          <div className="text-blue-500">Câu hỏi này?</div>
        </div>
        <div className="flex">
          <div className="w-24 shrink-0 font-bold">Answer:</div>

          <div className="">
            <div className="">
              <div>
                I selected the assorted colors option. Received only translucent colored clipboards. Just be sure to select the appropriate set option.
              </div>
              <div className='text-xs text-gray-600'>
                By Gnemik on February 19, 2020
              </div>
            </div>
            <div class="flex items-center">
              <FontAwesomeIcon icon={faChevronDown} />
              <span className='ml-1 text-blue-500'>
                See more answers
              </span>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductQA