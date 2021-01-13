// import React, { useEffect } from "react";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';

function App() {

  const [movies, setMovies] = useState([])

  console.log(movies)

  return (
    <div className="App">
        <Search setMovies={setMovies}/>
        <Movies movies={movies} />
      {/* </Switch>
    </Router> */}
    </div>
  );
}

export default App;
