import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Movies({ movies, setNominations, nominations, props, setResults }) {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    console.log(movies)

    const showMovies = () => {
        return movies.map(mov => {
            return <>
            <Card className='grid' key={mov['imdbID']}>
                <Card.Img variant='top' src={`${mov['Poster']}`}/>
                <Card.Body>
                    <Card.Title>{mov['Title']}</Card.Title>
                    <Card.Text>{mov['Year']}</Card.Text>
                    {nominations.find(movie => movie['imdbID'] === mov['imdbID']) ? 
                    <Button className='inactive' variant='info' disabled>Nominated</Button>
                    // <Button className='inactive' variant='outline-info' disabled>Nominated</Button>
                    :
                    <Button onClick={() => clickHandler(mov)} variant='info'>Nominate Movie</Button>
                    }
                </Card.Body>
            </Card>
            </>
        })
    }

    const clickHandler = (movie) => {
        // 1. adds movie to Nominations
        // button no longer works
        // button to remove movie in Nominate
        console.log(nominations.length)
        nominations.length < 5 ? setNominations(prevNominations => ([...prevNominations, movie])) : handleShow()
    }

    const handleNoms = () => {
        setResults(false)
        handleClose()
    }
    // Title, Year, imdbID
  
    return (
        <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Nomination Maximum Met</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Only 5 movies can be nominated for The Shoppies.</p>
                <p>If you would like to nominate this movie please remove a movie from your nominations.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-info" onClick={handleClose}>Cancel</Button>
                <Button variant="info" onClick={handleNoms}>Go To Nominations</Button>
            </Modal.Footer>
        </Modal>
        <div className='container-fluid auto30'>
            {showMovies()}
        </div>
      </>
    );
  }
  
  export default Movies;