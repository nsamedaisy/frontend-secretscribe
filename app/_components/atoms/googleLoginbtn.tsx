import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { FRONT_END_URL } from '../constant'
import axios from 'axios';
import { useStore } from '@/app/hooks/useStore';


const googleLoginbtn = () => {
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);

  return (
    <GoogleLogin
      useOneTap
      onSuccess={async (credentialResponse) => {
        const response = await axios.post(FRONT_END_URL +
          '/login',
          {
            token: credentialResponse.credential,
          }
        );
        const data = response.data;

        localStorage.setItem(authData, JSON.stringify(data));
        setAuthData(data);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}

export default googleLoginbtn