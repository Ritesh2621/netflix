import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png.png';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const navigate = useNavigate();
  return (
    <Container className='p-[0.4rem] flex items-center justify-between'>
      <div className="m-7">
        <img className='h-[7rem] absolute top-0' src={logo} alt="logo" />
      </div>
      
    </Container>
  )
}


const Container = styled.div`
button{
    border-radius: 0.2rem;
    font-size: 1.2rem;
}
`;