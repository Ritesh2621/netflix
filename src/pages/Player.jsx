import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate} from 'react-router-dom'
import video from '../assets/ST.mp4'

function Player() {
    const navigate = useNavigate();
  return (
    <div className='h-[100vh] w-[100vw]'>
      <div className='absolute p-[2rem] z-10 text-4xl cursor-pointer text-white '>
        <BsArrowLeft onClick={()=>navigate(-1)} />
      </div>
      <video src={video} autoPlay loop controls muted className='h-[100%] w-[100%] object-cover'></video>
    </div>
  )
}

export default Player
