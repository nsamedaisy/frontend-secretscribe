"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL, FRONT_END_URL } from '../_components/constant';
import { HiOutlineExternalLink } from "react-icons/hi";
import { CurrentUserGuard } from '../_services/ui';
import { IUser } from '../_services/utils';

interface Props {
  currentUser: IUser;
}

const GenerateLink = ({ currentUser }: Props) => {
  const [title, setTitle] = useState('');
  const [topicLink, setTopicLink] = useState<string>('');

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  //copy link function
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(topicLink);
      alert('URL copied')
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  }

  //generate bucket link
  const generateLink = (bucket_id: string) => {
    return `${FRONT_END_URL}/writeMessage/${bucket_id}`;
  }

  const createBucket = async () => {
    const creator = {
      name: currentUser.name,
      email: currentUser.email,
      password: '',
    }

    try {
      const response = await axios.post(API_URL + '/bucket', { title, creator });
      console.log({ response })

      const { _id } = response.data;
      const url = generateLink(_id);
      setTopicLink(url);
      // Do something with the generated link
    } catch (error) {
      console.error(error);
    }
    setTitle("")
  };


  return (
    <div className=' bg-gradient-to-tr from-green to-cream text-black min-h-screen flex flex-col items-center gap-4 justify-center'>
      <div className='w-[25%] sm:w-[25%] h-[30%] bg- py-10 shadow-2xl px-9 bg-gradient-to-tr from-cream to-green'>
        <h1 className='text-[25px] italic'>Generate your bucket link and share</h1>
        <div className='flex items-center '>
          <label htmlFor="title" className='text-[23px] pr-4 '>Title:</label>
          <input placeholder='Enter a title' type="text" value={title} className="px-3 border-2 border-cream py-3 bg-transparent text-white focus:outline-none placeholder:text-white" onChange={handleTitleChange} />
        </div>
        <div className='flex flex-row gap-4'>
          {
            topicLink && (
              <section>
                <p className='text-white w-[100px]'> {topicLink}</p>
              </section>
            )
          }
          <HiOutlineExternalLink onClick={copyLink} className="cursor-pointer" />
        </div>
        <button onClick={createBucket} className="flex items-center border-2 border-green py-2 p-4">Generate Link</button>
      </div>
    </div>
  )
}

export default CurrentUserGuard(GenerateLink);
