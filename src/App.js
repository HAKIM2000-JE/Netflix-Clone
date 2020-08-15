import React, { useState, useEffect } from "react";
import Row from "./Row.js";
import Request from "./request";
import axios from "./axios";
import Banner from "./Banner.js";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const { movies, setMovies } = useState([]);

  //const [{ basket }, dispatch] = useStateValue();

  //  Navbar
  // Banner
  // A Snippet of code thta run accordding to a condition
  /*useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //Clenan up opeartion
      unsubscribe();
    };
  }, []);*/
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Banner />
            <Row
              title="Netflix Originals"
              fetchUrl={Request.fetchNetflixOriginals}
              islargeRow
            />

            <Row
              title="Trending Now"
              fetchUrl={Request.fetchTrending}
              other="Just Me"
            />
            <Row
              title="Top Rated"
              fetchUrl={Request.fetchTopRated}
              other="Just Me"
            />
            <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
            <Row title="Comedy" fetchUrl={Request.fetchComedyMovies} />
            <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
            <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
            <Row title="Romance" fetchUrl={Request.fetchRomanceMovies} />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
