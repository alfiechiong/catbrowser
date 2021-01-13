import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom"
import {useSelector} from 'react-redux'
import queryString from 'query-string'
import {listCatByBreed} from '../functions/catapi'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Breed} from './Breed'
import Header from './Header'
import {setCatByBreed} from '../redux/actions'
import { ImainReducer } from "../common/interfaces";

const Content = ():JSX.Element=>{
    const {search} = useLocation()
    const history = useHistory()
    const {id, name} = queryString.parse(search)
    const listByBreed = useSelector<ImainReducer,any >((state:ImainReducer)=>state.cats.catsByBreed)

    const setCatsData = (catsByBreed:any)=>{
        const catsMapped = catsByBreed.map((item:any)=>{
            return  {
                'name':item.breeds[0].name,
                'img':item.url,
                'temperament':item.breeds[0].temperament,
                'description':item.breeds[0].description,
                'origin':item.breeds[0].origin,
                'id':item.id
              }
        })

        setCatByBreed(catsMapped)
    }

    const getData = async (id:any): Promise<any> =>{
        const catBreeds:any = await listCatByBreed(id)
        console.log(catBreeds)
        setCatsData(catBreeds)
        }
  
    useEffect(()=>{
        getData(id ? id : "hima")
    },[id])
    
    const getDetails = async (item:any)=>{
        history.push(`/details/${item.id}?name=${item.name}&description=${item.description}&img=${item.img}&temp=${item.temperament}&origin=${item.origin}`);
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
          
          {listByBreed && listByBreed.map((item:any)=>{
           return <Col key={item.id} ><Card style={{ width: '18rem', margin:"10px"}}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Button variant="primary" onClick={()=>getDetails(item)} >View Details</Button>
                    </Card.Body>
                    </Card>
                    </Col>
        })}
          
        </Row>
        </Container>
    )
}

export default Content