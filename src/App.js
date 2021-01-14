import React, { useState } from "react";
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
      {results ? 
      <Movies movies={movies} setNominations={setNominations} nominations={nominations} setResults={setResults}/>
      :
      <Nominations nominations={nominations} setNominations={setNominations}/>
      }
      {/* if I want to add the side bar {nominations.length > 0 && (<Nominations nominations={nominations} setNominations={setNominations}/>)} */}
    </div>
  );
}

export default App;

// https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.c7xqfkhsqnd4
// need a visible switch option
// countdown of sort 3/5, 2 selections left, etc
// *would like to use id to make a hover or pop up option showing description (will need another api call in documentation)