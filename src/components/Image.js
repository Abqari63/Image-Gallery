import React from 'react'

const Image = (props) => {
    return (
        <div className="flex rounded-lg shadow-lg shadow-gray-500 flex-col w-inherit h-96">
            <img className='w-full rounded-t-lg h-52' src={props.webformatURL} alt="img" />
            <div className="p-3">
                <p>Likes: {props.likes}</p>
                <p>Views: {props.views}</p>
                <p>downloads: {props.downloads}</p>
                <p><strong>Tags: </strong>{props.tags}</p>
                <a href={props.pageURL} rel="noreferrer" target='_blank'><button className="my-4 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 duration-200 cursor-pointer rounded-md">Download</button></a>
            </div>
        </div>
    )
}

export default Image
