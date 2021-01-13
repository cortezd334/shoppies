import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Movies({ movies }) {

    console.log(movies)

    const showMovies = () => {
        return movies.map(mov => {
            return <Card className='grid' key={mov['imdbID']}>
                <Card.Img variant='top' src={`${mov['Poster']}`}/>
                <Card.Body>
                    <Card.Title>{mov['Title']}</Card.Title>
                    <Card.Text>{mov['Year']}</Card.Text>
                    <Button>Nominate Movie</Button>
                </Card.Body>
            </Card>
        })
    }

    // Title, Year, imdbID
  
    return (
      <div className='container auto30'>
        {showMovies()}
      </div>
    );
  }
  
  export default Movies;