import {useHistory,useLocation} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import queryString from 'query-string'

const Cat = ()=>{
    const history = useHistory()
   const {search} = useLocation()
   const {name,img,temp, description, origin}:any = queryString.parse(search)

    return <Card style={{ width: '60vw',margin: `0 auto`}}>
        <Button variant="primary" onClick={()=>history.goBack()}> Back </Button>
    <Card.Img variant="top" src={img}/>
    <Card.Body>
        <Alert variant="success">
        <Alert.Heading>{name}</Alert.Heading>
            <p>
                <b>Origin :</b>{origin}
            </p>    
            <hr />
            <p>
                {temp}
            </p>
            <hr />
            <p>
                {description}
            </p>
        </Alert>
    </Card.Body>
    </Card>}
export default Cat