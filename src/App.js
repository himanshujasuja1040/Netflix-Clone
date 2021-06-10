import React, { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import axios from "axios";
import { request } from "./Api/Api";
const App = () => {
  const [popular, setPopular] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${request.fetchTrending}`)
      .then((res) => setPopular(res.data.results));

    axios
      .get(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
      .then((res) => setNetflixOriginals(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchHorrorMovies}`)
      .then((res) => setHorror(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchRomanceMovies}`)
      .then((res) => setRomance(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3${request.fetchComedyMovies}`)
      .then((res) => setComedy(res.data.results));
  }, [setPopular, setNetflixOriginals, setHorror, setRomance, setComedy]);

  return (
    <div className="app">
      <Header />
      <Main />
      <h3>Popular on Netflix</h3>
      <div className="app_row">
        {popular.map((popular) => {
          return (
            <div>
              <Details img={`${image_base_url}${popular.poster_path}`} />
            </div>
          );
        })}
      </div>
      <h3>Horror</h3>
      <div className="app_row">
        {horror.map((popular) => {
          return (
            <div>
              <Details img={`${image_base_url}${popular.poster_path}`} />
            </div>
          );
        })}
      </div>
      <h3>Netflix Originals</h3>
      <div className="app_row">
        {netflixOriginals.map((popular) => {
          return (
            <div>
              <Details img={`${image_base_url}${popular.poster_path}`} />
            </div>
          );
        })}
      </div>
      <h3>Romance</h3>
      <div className="app_row">
        {romance.map((popular) => {
          return (
            <div>
              <Details img={`${image_base_url}${popular.poster_path}`} />
            </div>
          );
        })}
      </div>
      <h3>Comedy</h3>
      <div className="app_row">
        {comedy.map((popular) => {
          return (
            <div>
              <Details img={`${image_base_url}${popular.poster_path}`} />
            </div>
          );
        })}
      </div>
      <div className="Footer">
        <h1>Himanshu Jasuja ❤️</h1>
      </div>
    </div>
  );
};

export default App;
