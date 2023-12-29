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
    const createor = {
      name: 'ricardo',
      email: 'ricardo@gmail.com',
      password: '1234',
    }

    try {
      const response = await axios.post(API_URL + '/bucket', { title, createor });
      const { link } = response.data;
      const url = generateLink(link.id);
      setTopicLink(url);
      // Do something with the generated link
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className='bg-gradient-to-tr from-green to-cream text-black min-h-screen flex items-center justify-center'>
      <h1>Generate Link</h1>
      <input type="text" value={title} onChange={handleTitleChange} />

      {
        topicLink && (
          <section>
            <p>url: {topicLink}</p>
          </section>
        )
      }
      <button onClick={createBucket}>Generate Link</button>
    </div>
  )
}

export default GenerateLink