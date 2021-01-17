import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';
import Nominations from './components/Nominations';
import Button from 'react-bootstrap/Button';

function App() {

  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [results, setResults] = useState(true)

  console.log(movies)
  console.log(nominations)

  const toNoms = () => {
    setResults(false)
  }

  const toMovs = () => {
    setResults(true)
  }

  // console.log(results)
  console.log('results', results)
  return (
    <div className="App">
      <h1 id='heading'>The Shoppies</h1>
      <h2 className='sub'>Nominate your top 5 movies for The Shoppies</h2>
      <Search setMovies={setMovies} setResults={setResults}/>
      {/* <searchAlert /> */}
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
      {/* if I want to add the side bar {nominations.length > 0 && (<Nominations nominations={nominations} setNominations={setNominations}/>)} */}
    </div>
  );
}

export default App;

//empty search length of undefined movies 49
//buttons on cards
//consistent functions
//not displaying alert may have to do with the render part


// https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.c7xqfkhsqnd4
// need a visible switch option
// *would like to use id to make a hover or pop up option showing description (will need another api call in documentation)

// when submitting add that I would have preferred to do a toggle

          {/* <h3><Link to='/results'>Results</Link></h3>
          <h3><Link to='/nominations'>Nominations</Link></h3>
          <h3>{5 - `${nominations.length}`} Nominations left</h3> */}
        {/* <Switch>
        <Route path='/results'>
            <Movies movies={movies} setNominations={setNominations} nominations={nominations}/>
        </Route>
        <Route path='/nominations'>
            <Nominations nominations={nominations} setNominations={setNominations}/>
        </Route> */}

