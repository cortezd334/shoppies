import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Nominations({ nominations, setNominations}) {
   
    console.log(nominations)

    const showNominations = () => {
        return nominations.map(nom => {
            return <Card className='grid' key={nom['imdbID']}>
                <Card.Img variant='top' src={`${nom['Poster']}`}/>
                <Card.Body className='nomBod'>
                    <Card.Title>{nom['Title']}</Card.Title>
                    <Card.Text>{nom['Year']}</Card.Text>
                    <Button onClick={() => clickHandler(nom)} variant='dark'>Remove</Button>
                </Card.Body>
            </Card>
        })
    }

    const clickHandler = (movie) => {
        const removeMov = nominations.filter(mov => mov['imdbID'] !== movie['imdbID'])
        setNominations(removeMov)
    }

    return(
        <>
            {nominations.length > 0 ?
                (<div className='container-fluid auto30'>
                    {showNominations()}
                </div>)
                :
                <h2 className='sub'>Please search and nominate movies.</h2>
            }
        </>
    )
}
export default Nominations