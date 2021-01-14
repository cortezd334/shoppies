import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
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
      <h1>The Shoppies</h1>
      <h2>Nominate your top 5 movies for The Shoppies</h2>
      <Search setMovies={setMovies} setResults={setResults}/>
      <Router>
          {/* <h3><Link to='/results'>Results</Link></h3>
          <h3><Link to='/nominations'>Nominations</Link></h3> */}
          <h3>{5 - `${nominations.length}`} Nominations left</h3>
        {/* <Switch> */}
          {results ? 
          // <Route path='results'>
            <Movies movies={movies} setNominations={setNominations} nominations={nominations} setResults={setResults}/>
          // </Route>
          :
          // <Route path='nominations'>
            <Nominations nominations={nominations} setNominations={setNominations}/>
          // </Route>
          }
        {/* </Switch> */}
      </Router>
      {/* if I want to add the side bar {nominations.length > 0 && (<Nominations nominations={nominations} setNominations={setNominations}/>)} */}
    </div>
  );
}

export default App;

// with routes I no longer get results, need to find another way to switch btwn the two
// or take the turnery out

// https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.c7xqfkhsqnd4
// need a visible switch option
// countdown of sort 3/5, 2 selections left, etc
// *would like to use id to make a hover or pop up option showing description (will need another api call in documentation)

// when submitting add that I would have preferred to do a toggle