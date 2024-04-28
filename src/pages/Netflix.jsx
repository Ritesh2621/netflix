import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/home.jpg";
import logo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div>
        <img
          src={BackgroundImage}
          alt="background"
          className="w-[100vw] h-[100vh] "
        />
        <div className="absolute bottom-[3.5rem]">
          <div>
            <img
              src={logo}
              alt="logo"
              className=" w-[60%] h-[100%] ml-[5rem]"
            />
          </div>
          <div className="m-[4rem] gap-[1rem] inline-flex cursor-pointer ml-[70px]">
            <button className="flex m-2 px-5 py-1 justify-center items-center gap-2 text-black bg-white rounded-sm hover:opacity-50">
              <FaPlay onClick={() => navigate("/player")} /> Play
            </button>
            <button className="flex m-2 px-5 py-1 justify-center items-center gap-2 text-white bg-neutral-500 rounded-sm  hover:opacity-50">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </div>
  );
}
