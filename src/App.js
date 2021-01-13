// import React, { useEffect } from "react";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';
import Nominations from './components/Nominations';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])

  console.log(movies)
  console.log(nominations)

  return (
    <div className="App">
        <Search setMovies={setMovies}/>
        <Movies movies={movies} setNominations={setNominations} nominations={nominations}/>
        <Nominations nominations={nominations} setNominations={setNominations}/>
      {/* </Switch>
    </Router> */}
    </div>
  );
}

export default App;

// https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.c7xqfkhsqnd4
// add movie to nomination list (disable button)
// banner when 5 nominations
// view nomination list
// remove from nomination list
// *would like to use id to make a hover or pop up option showing description (will need another api call in documentation)