// import React, { useEffect } from "react";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';
import Nominations from './components/Nominations';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [results, setResults] = useState(true)

  console.log(movies)
  console.log(nominations)

  return (
    <div className="App">
        <Search setMovies={setMovies}/>
        {results ? 
        <Movies movies={movies} setNominations={setNominations} nominations={nominations} setResults={setResults}/>
        :
        <Nominations nominations={nominations} setNominations={setNominations}/>
        }
        {/* if I want to add the side bar {nominations.length > 0 && (<Nominations nominations={nominations} setNominations={setNominations}/>)} */}
    </div>
  );
}
// make 2 diff views

export default App;

// https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.c7xqfkhsqnd4
// banner when 5 nominations (currently 6)
// view nomination list
// remove from nomination list
// *would like to use id to make a hover or pop up option showing description (will need another api call in documentation)