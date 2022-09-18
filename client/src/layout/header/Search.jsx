import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Input from '../../components/Input';

const options = [
    'one', 'two', 'three'
];



const Search = () => {
    return (
        <Input
            className='w-180'
            right={<SearchIcon />}
            left={<DropSelect />}
        />
    )
}

const DropSelect = () => {
    const defaultOption = options[0];
    return (
        <Dropdown
            controlClassName='rounded-left rounded-r-none'
            menuClassName='mt-4'
            options={options}
            onChange={() => { }}
            value={defaultOption}
            placeholder="Select an option"
        />
    )
}

const SearchIcon = () => {
    return (
        <button className='bg-yellow-500 hover:bg-yellow-600 duration-200 py-2 px-3 text-black rounded-r'>
            <FontAwesomeIcon icon={faSearch} />
        </button>
    )
}


export default Search