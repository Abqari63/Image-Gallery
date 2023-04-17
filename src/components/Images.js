import React, { useState } from 'react'
import Image from './Image'
import SearchInput from './SearchInput'
import axios from 'axios'

const Images = () => {
    
    const [text, setText] = useState('')
    const [hits, setHits] = useState([])
    const [totalHits, setTotalHits] = useState([])
    const [page, setPage] = useState(1)

    const SearchQuery = async(input) => {
        let url = `https://pixabay.com/api/?key=33564411-0100ffadbf5c04e452a5f59b9&q=${input}&image_type=photo&pretty=true&pageSize=20&page=${page}`
        let response = await axios.get(url);
        setHits(response.data.hits);
        setTotalHits(response.data.totalHits);
        setText(input);
    }

    const handlePrev = async() => {
        setPage(page-1);
        let url = `https://pixabay.com/api/?key=33564411-0100ffadbf5c04e452a5f59b9&q=${text}&image_type=photo&pretty=true&pageSize=20&page=${page}`
        let response = await axios.get(url);
        setHits(response.data.hits);
    }

    const handleNext = async() => {
        setPage(page+1);
        let url = `https://pixabay.com/api/?key=33564411-0100ffadbf5c04e452a5f59b9&q=${text}&image_type=photo&pretty=true&pageSize=20&page=${page}`
        let response = await axios.get(url);
        setHits(response.data.hits);
    }

    return (
        <>
        <SearchInput SearchQuery={SearchQuery}/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {hits.map((image) => {
                return <Image key={image.id} webformatURL={image.webformatURL} likes={image.likes} views={image.views} tags={image.tags} downloads={image.downloads} pageURL={image.pageURL}/>
            })}
        </div>
        {!(text === '') && <div className="flex justify-evenly mt-10 p-5">
            <button disabled={(page<=1)} className="rounded-md text-white bg-black px-4 py-2 cursor-pointer" onClick={handlePrev}>&larr; Prev</button>
            <button disable={(page===Math.ceil(totalHits/page))} className="rounded-md text-white bg-black px-4 py-2 cursor-pointer" onClick={handleNext}>Next &rarr;</button>
        </div>}
        </>
    )
}

export default Images
