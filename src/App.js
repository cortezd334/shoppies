import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';
import Nominations from './components/Nominations';
import Button from 'react-bootstrap/Button';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [results, setResults] = useState(true)

  const toNoms = () => {
    setResults(false)
  }

  const toMovs = () => {
    setResults(true)
  }

  return (
    <div className="App">
      <h1 id='heading'>The Shoppies</h1>
      <h2 className='sub'>Nominate your top 5 movies for The Shoppies</h2>
      <Search setMovies={setMovies} setResults={setResults}/>
      <Router>
          {results ? 
          <Route path='/'>
            <Button className='switch' variant="outline" onClick={toNoms}>View Nominations</Button>
            <Movies movies={movies} setNominations={setNominations} nominations={nominations} setResults={setResults}/>
          </Route>
          :
          <Route path='/'>
            <Button className='switch' variant="outline" onClick={toMovs}>View Search Results</Button>
            <Nominations nominations={nominations} setNominations={setNominations}/>
          </Route>
          }
      </Router>
    </div>
  );
}

export default App;

// https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.c7xqfkhsqnd4

