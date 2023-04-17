import React, { useState } from 'react'

const SearchInput = ({ SearchQuery }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SearchQuery(text);
        setText('');
    }
    return (
        <form className="p-2 mb-20 mt-4 w-[41%] rounded-xl m-auto shadow-lg shadow-gray-500" action="" onSubmit={handleSubmit}>       
            <input className="text-lg border-2 m-auto rounded-l-2xl py-3 px-5 outline-none w-[80%]" type="text" placeholder='Search...' name="search" value={text} id="search" onChange={handleChange}/>
            <input className="text-lg bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-r-2xl w-[20%] px-5 py-3 duration-200 text-white" type="submit" value='Search' />
        </form>
    )
}

export default SearchInput
