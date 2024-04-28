import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { Link,useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {firebaseAuth} from '../utils/firebase.config'

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState("");
  const [submitdisabled,setSubmitDisabled] = useState(false); // [true,false
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit =()=>{
    if(!values.email || !values.pass){
      setErrors("Please fill all the fields");
      return;
    }
    setErrors("");
   
    setSubmitDisabled(true);
   createUserWithEmailAndPassword(firebaseAuth, values.email, values.pass).then(async(res) =>{
      setSubmitDisabled(false);
      const user = res.user;
      await updateProfile(user,{displayName: user.email});
      navigate('/');
   }).catch((err)=>{
    setSubmitDisabled(false);
   setErrors(err.message);
  });
  };
  return (
    <Container className="relative" showPassword={showPassword}>
      <BackgroundImage />
      <div className="w-[100%] h-[100vh] bg-black absolute top-0 left-0 opacity-50 "></div>
      <div className="absolute top-0 left-0 h-[100vh] w-[100vw] grid grid-template-row-[15vh 85vh]">
        <Header login />
        <div className="flex flex-col items-center justify-center-center text-zinc-50">
          <div className="flex flex-col ">
            <h1 className="text-center font-bold text-slate-50 text-[2.5rem]">
              Unlimited Movies and Tv Shows
            </h1>
            <h2 className="gap-[1rem] text-center text-xl p-2">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="text-center gap-[1rem] text-xl p-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="form relative left-20 m-3">
              <input
                className="mb-2 p-4"
                type="email"
                placeholder="Email Address"
                name="Email"
                onChange={(e)=>setValues((prev)=>({...prev,email: e.target.value}))}
              />
              {showPassword && (
              

                <input
                  className="mb-2 ml-1 p-4"
                  type="password"
                  placeholder="Password"
                  name="Password"
                  onChange={(e)=>setValues((prev)=>({...prev,pass: e.target.value}))}
                />
              
              )}

              {!showPassword && (
                <button
                  onClick={() => setShowPassword(true)}
                  className="bg-red-800 hover:bg-red-600 w-[100%] ml-4 mb-2 "
                >
                  Get Started
                </button>
              )}
            </div>
            <b className="text-red-600 text-center mb-2">{errors}</b>
            <button className="bg-red-800 hover:bg-red-600 w-56 mx-auto" onClick={handleSubmit} disabled={submitdisabled}>
              Sign Up
            </button>
          </div>
          <div className="m-2 text-xl">Already have an account? <Link to='/login' className="text-red-600">Log In</Link></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .form {
    display: grid;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    width: 60%;
    input {
      color: black;
      border: none;

      font-size: 1.2rem;
      border: 1px solid black;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
