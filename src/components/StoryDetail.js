import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = () => {
    const { id } = useParams();
    const [storyDetail, setStoryDetail] = useState(null);

    useEffect(() => {
        const fetchStoryDetail = async () => {
            try {
                const response = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
                const json = await response.json();
                setStoryDetail(json);
            } catch (error) {
                console.log(error);
                
            }
        };

        fetchStoryDetail();
    }, [id]);

    if (!storyDetail) return <div className='text-white text-center'>Loading...</div>;

    return (
        <div className='p-10'>
            <h1 className='text-white text-center font-bold text-4xl mb-5'>{storyDetail.Title}</h1>
            <p className='text-white text-center mb-5'>{storyDetail.description}</p>
            <div className='flex '>
                <div className='m-5 p-8 border border-black rounded-md w-full md:w-1/3'>
                    <h1 className='text-2xl text-orange-300 font-bold mx-2 my-2'>{storyDetail.Brainquest[0].Question}</h1>
                    <p className='font-xl text-white mb-4'>{storyDetail.Storyadvenure.content[0].Paragraph}</p>
                    <img 
                        className='rounded-xl h-auto w-full mb-4' 
                        src={`https://ik.imagekit.io/dev24/${storyDetail?.Image[0]}`} 
                        alt='story illustration' 
                    />
                </div>
                <div className='m-5 p-8 border border-black rounded-md w-full md:w-2/3'>
                    <p className='font-3xl my-4 text-black font-bold'>{storyDetail.Storyadvenure.content[1].Paragraph}</p>
                    <div className='flex justify-between'>
                        <img 
                            className='rounded-xl h-auto w-[48%] mb-4' 
                            src={`https://ik.imagekit.io/dev24/${storyDetail.Storyadvenure.content[0].Storyimage[0]}`} 
                            alt='story image 1' 
                        />
                        <img 
                            className='rounded-xl h-auto w-[48%] mb-4' 
                            src={`https://ik.imagekit.io/dev24/${storyDetail.Storyadvenure.content[0].Storyimage[1]}`} 
                            alt='story image 2' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetail;
