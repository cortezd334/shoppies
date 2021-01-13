import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search({ movies, setMovies }) {
    
    const searchForm = {
        movie: ''
    }

    const [form, setForm] = useState(searchForm)
    

    function handleChange(e) {
        let obj = {[e.target.name]: e.target.value}
        setForm(prevState => ({...prevState, ...obj}))
    }

    const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB}&s=${form.movie}&type=movie`

    function handleSubmit(e) {
        e.preventDefault()

        fetch(api)
        .then(res => res.json())
        .then(json => {
            setMovies(json['Search'])})
    }

    return(
        <Form className='form-inline' onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group>
                    <Form.Label className='item'>Movie</Form.Label>
                    <Form.Control type='text' value={form.movie} name='movie' onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' variant="outline-info">Submit</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
export default Search