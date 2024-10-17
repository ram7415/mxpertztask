import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ title }) => {
    return (
        <Link to={`/story/${title._id}`} key={title._id} className='bg-blue-400 m-3 rounded-lg p-2 block transition-transform duration-300 transform hover:scale-102'>
            <div className='h-70 w-60 ps-2'>
                <img
                    className='w-full h-48 object-cover rounded-lg'
                    src={`https://ik.imagekit.io/dev24/${title?.Image[0]}`}
                    alt={title.Title || title.Storyadvenure?.Storytitle}
                />
                <h3 className='text-white mt-2 text-lg font-semibold line-clamp-2'>{title.Title || title.Storyadvenure?.Storytitle}</h3>
                <button className='bg-white px-5 py-2 rounded-lg w-full text-green-400 font-bold mt-2 transition-colors duration-300 hover:bg-green-400 hover:text-white'>
                    {title.Status}
                </button>
            </div>
        </Link>
    );
}

export default StoryCard;
