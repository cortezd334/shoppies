import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Search({ setMovies, setResults, props }) {
    
    const searchForm = {
        movie: ''
    }

    const [form, setForm] = useState(searchForm)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleChange = (e) => {
        let obj = {[e.target.name]: e.target.value}
        setForm(prevState => ({...prevState, ...obj}))
    }

    const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB}&s=${form.movie}&type=movie`

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.movie.length > 0) {
            setResults(true)

            fetch(api)
            .then(res => res.json())
            .then(json => {
                setMovies(json['Search'])
            })
        } else {
            handleShow()
        }
    }

    return(
        <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Movie Title Not Entered</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Enter a movie title to view movie results.</p>
            </Modal.Body>
        </Modal>
        <Form className='form-inline' onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group>
                    <Form.Label className='item'>Search Title</Form.Label>
                    <Form.Control type='text' value={form.movie} name='movie' onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' variant="outline">Submit</Button>
                </Form.Group>
            </Form.Row>
        </Form>
        </>
    )
}
export default Search;