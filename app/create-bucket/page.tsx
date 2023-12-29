"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL, FRONT_END_URL } from '../_components/constant';

const GenerateLink = () => {
  const [title, setTitle] = useState('');
  const [topicLink, setTopicLink] = useState<string>('');

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const generateLink = (bucket_id: string) => {
    return `${FRONT_END_URL}/writeMessage/${bucket_id}`;
  }

  const createBucket = async () => {
    const creator = {
      name: 'Sam Gmarvis',
      email: 'sgmarvis@gmail.com',
      password: 'starhood360',
    }

    try {
      const response = await axios.post(API_URL + '/bucket', { title, creator });
      const { link } = response.data;
      // console.log("link", link)
      const url = generateLink(link.id);
      setTopicLink(url);
      // Do something with the generated link
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='bg-gradient-to-tr from-green to-cream text-black min-h-screen flex flex-col items-center gap-4 justify-center'>
      <h1 className='text-[25px] italic'>Generate your bucket link and share</h1>
      <div className='flex items-center '>
        <label htmlFor="title" className='text-[23px] pr-4'>Title:</label>
        <input placeholder='Enter a title' type="text" value={title} className="px-3 border-2 border-cream py-3 bg-transparent text-white focus:outline-none" onChange={handleTitleChange} />
      </div>

      {
        topicLink && (
          <section>
            <p className='text-white'>url: {topicLink}</p>
          </section>
        )
      }
      <button onClick={createBucket} className="flex items-center border-2 border-green py-2 p-4">Generate Link</button>
    </div>
  )
}

export default GenerateLink