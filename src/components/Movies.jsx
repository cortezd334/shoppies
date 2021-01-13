import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Movies({ movies, setNominations, nominations }) {

    console.log(movies)

    const showMovies = () => {
        return movies.map(mov => {
            return <Card className='grid' key={mov['imdbID']}>
                <Card.Img variant='top' src={`${mov['Poster']}`}/>
                <Card.Body>
                    <Card.Title>{mov['Title']}</Card.Title>
                    <Card.Text>{mov['Year']}</Card.Text>
                    {nominations.find(movie => movie['imdbID'] == mov['imdbID']) ? 
                    <Button className='inactive'>Movie Nominated</Button>
                    :
                    <Button onClick={() => clickHandler(mov)}>Nominate Movie</Button>
                    }
                </Card.Body>
            </Card>
        })
    }

    const clickHandler = (movie) => {
        // 1. adds movie to Nominations
        // button no longer works
        // button to remove movie in Nominate
        setNominations(prevNominations => ([...prevNominations, movie]))
    }
    // Title, Year, imdbID
  
    return (
      <div className='container auto30'>
        {showMovies()}
      </div>
    );
  }
  
  export default Movies;

//   function handleClick(res) {
//     deleteRes(res)
//     const filRes = user.reservations.filter(restaurant => restaurant.id !== res.id)
//     console.log(filRes)
//     setUser(prevUser => ({...prevUser, user:{ ...prevUser.user, reservations: filRes}}))
// }

// setUser(prevUser => ({...prevUser, user:{ ...prevUser.user, reservations: [...prevUser.user.reservations, json]}}))