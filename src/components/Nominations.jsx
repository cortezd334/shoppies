import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Nominations({ nominations, setNominations}) {
   
    const showNominations = () => {
        return nominations.map(nom => {
            return <Card className='grid' key={nom['imdbID']}>
                <Card.Img variant='top' src={`${nom['Poster']}`}/>
                <Card.Body>
                    <Card.Title>{nom['Title']}</Card.Title>
                    <Card.Text>{nom['Year']}</Card.Text>
                    <Button onClick={() => clickHandler(nom)} variant='info'>Remove</Button>
                </Card.Body>
            </Card>
        })
    }

    const clickHandler = (movie) => {
        const removeMov = nominations.filter(mov => mov['imdbID'] !== movie['imdbID'])
        console.log(removeMov)
        setNominations(removeMov)
    }

    return(
        <>
            <div className='container-fluid auto30'>
                {showNominations()}
            </div>
        </>
    )
}
export default Nominations