import React, { useEffect, useState } from 'react'
import StoryCard from './StoryCard'
import { Link } from 'react-router-dom'

const Stories = () => {
    const [storiesData, setStoriesData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://mxpertztestapi.onrender.com/api/sciencefiction')
        const json = await response.json()
        setStoriesData(json)
        console.log('data',json);
        
    }

    return (
       <div>
          <h1 className='text-4xl text-center m-3 text-white'>Science Fiction Stories</h1>
          <div className='flex flex-wrap p-8'>
            {storiesData.map((data) => {
              return (
                <Link to={`/story/${data._id}`} key={data._id}>
                        <StoryCard title={data} />
                    </Link>
                )
              })}
              </div>
        </div>
    )
}

export default Stories
