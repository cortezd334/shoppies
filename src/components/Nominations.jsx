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
                </Card.Body>
            </Card>
        })
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