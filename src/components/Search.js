"use client";
import { SearchIcon } from '@/assets/SearchIc';

import React, { useState } from 'react';
const Search = ({ data, onSearch }) => {
    const [query, setQuery] = useState('');
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        onSearch(inputValue);
    };
    return (
        <div className='relative'>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className='bg-gray-200 p-1 rounded-2xl'
            />
            <div className='absolute top-2 bottom-0 right-2'>
                <SearchIcon  />
            </div>
        </div>
    );
};
export default Search;