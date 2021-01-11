import {useEffect} from  'react'
import {useHistory, useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { ImainReducer } from '../common/interfaces'
import Alert from 'react-bootstrap/Alert'
import {setCurDetails} from '../redux/actions'

interface ParamTypes {
    cid: string;
  }

const Cat = ()=>{
    const history = useHistory()
   let params = useParams<ParamTypes>()
    useEffect(()=>{
        setCurDetails(params.cid)
    },[params]) 

    const details = useSelector<ImainReducer, any['details']>((state:ImainReducer) => state.cats.details)
    return <Card style={{ width: '60vw',margin: `0 auto`}}>
        <Button variant="primary" onClick={()=>history.goBack()}> Back </Button>
    <Card.Img variant="top" src={details.img}/>
    <Card.Body>
        <Alert variant="success">
        <Alert.Heading>{details.name}</Alert.Heading>
            <p>
                <b>Origin :</b>{details.origin}
            </p>    
            <hr />
            <p>
                {details.temperament}
            </p>
            <hr />
            <p>
                {details.description}
            </p>
        </Alert>
    </Card.Body>
    </Card>}
export default Cat