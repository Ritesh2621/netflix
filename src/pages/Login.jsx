import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";
import Img1 from "../assets/netflix-back.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState("");
  const [submitdisabled, setSubmitDisabled] = useState(false); // [true,false
  const [showPassword, setShowPassword] = useState(false);
  const handleLogIn = () => {
    if (!values.email || !values.pass) {
      setErrors("Please fill all the fields");
      return;
    }
    setErrors("");

    setSubmitDisabled(true);
     signInWithEmailAndPassword(firebaseAuth, values.email, values.pass)
      .then(async (res) => {
        setSubmitDisabled(false);
        const user = res.user;
        await updateProfile(user, { displayName: user.email });
        navigate("/");
      })
      .catch((err) => {
        setSubmitDisabled(false);
        setErrors(err.message);
      });
  };
  return (
    <Container className="relative" showPassword={showPassword}>
      <div className="h-[100vh] w-[100vw]">
        <img className="h-[100vh] w-[100vw] " src={Img1} alt="load" />
      </div>

      <div className="absolute top-0 left-0 h-[100vh] w-[100vw] grid grid-template-row-[15vh 85vh]">
        <Header login />

   <div className="bg-black h-[500px] w-[450px] opacity-75 ml-[570px]">
       <div className="mt-11 ml-10">

         <b className="text-white text-3xl ">Log In</b>
       </div>
        <div className="form flex flex-col justify-center items-center mt-9 ">
          <input
            className="m-3 p-2 bg-gray-600 rounded-md"
            type="email"
            placeholder="Email Address"
            name="Email"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <input
            className="m-3 p-2 bg-gray-600 rounded-md"
            type="password"
            placeholder="Password"
            name="Password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, pass: e.target.value }))
            }
          />

          <b className="text-red-600 text-center mb-2">{errors}</b>
          <button
            className="bg-red-800 hover:bg-red-500 w-[70%] mx-auto mt-8 text-white"
            onClick={handleLogIn}
            disabled={submitdisabled}
          >
            Log In
          </button>
        <b className="text-gray-500 text-md p-3 ml-0">New to Netflix? <Link to='/signup' className="text-gray-300 text-base">Sign Up Now</Link></b>
        </div>
   </div>
  </div>
     
    </Container>
  );
}

const Container = styled.div`
  .form {
    width: 100%;
    margin-bottom: 14rem;
    input {
      width: 70%;
      color: black;
      border: none;

      font-size: 1.2rem;
      border: 1px solid black;
      &:focus {
        outline: none;
      }
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
