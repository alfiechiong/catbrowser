import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom"
import queryString from 'query-string'
import {listCatByBreed} from '../functions/catapi'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {setCurDetails, setCatByBreed} from '../redux/actions'
import {Breed} from './Breed'
import Header from './Header'

const Content = ():JSX.Element=>{
    const {search} = useLocation()
    const history = useHistory()
    const {id, name} = queryString.parse(search)
    const [catBrd, setCatBrd] = useState([])
  
    useEffect(()=>{
      const getData = async (id:any): Promise<any> =>{
        const catBreeds:any = await listCatByBreed(id)
        console.log(catBreeds.data)
        setCatBrd(catBreeds.data)
        }
        getData(id ? id : "hima")

        setCatByBreed(id ? id :'Hima')
    },[id])
    
    const getDetails = async (id:string)=>{
         setCurDetails(id)
        history.push(`/details/${id}`);
    } 

    return (
        <Container fluid="md" style={{marginTop: '50px'}}>
            <Row>
                <Col style={{textAlign:"left", marginLeft:"10px"}}>
                    <Header />
                </Col>
                </Row>
            <Row>
                <Col style={{textAlign:"left", marginLeft:"10px"}}>          
                        <b>Breed</b><Breed name={name ? name : "Himalayan"} />
                </Col>
            </Row>
        <Row>
          
          {catBrd && catBrd.map((item:any)=>{
           return <Col key={item.id} ><Card style={{ width: '18rem', margin:"10px"}}>
                    <Card.Img variant="top" src={item.url} />
                    <Card.Body>
                        <Button variant="primary" onClick={()=>getDetails(item.id)} >Details</Button>
                    </Card.Body>
                    </Card>
                    </Col>
        })}
          
        </Row>
        </Container>
    )
}

export default Content