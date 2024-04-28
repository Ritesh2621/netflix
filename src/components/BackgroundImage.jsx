import React from 'react'
import styled from 'styled-components';
import Background from '../assets/login.jpg';

export default function BackgroundImage() {
  return (
    <div className='h-[100vh] w-[100vw]'>
   
      <img className='h-[100vh] w-[100vw] ' src={Background} alt="load" />
    </div>
  )
}


