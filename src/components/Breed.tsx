import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {useSelector} from 'react-redux'
import {IbreedsStates, ImainReducer} from '../common/interfaces'

const ListBreedItem  = ():JSX.Element => {
  const breeds = useSelector<ImainReducer, IbreedsStates['breeds']>((state:ImainReducer) => state.cats.breeds)
  return <Dropdown.Menu> {breeds.map((d:any, k:any) =>   
      <Dropdown.Item href={`/breed?id=${d.id}&name=${d.name}`} key={k}>{d.name}</Dropdown.Item>
    )}</Dropdown.Menu> 
}

export const Breed = (props:any) : JSX.Element =>{
  return <Dropdown>
    <Dropdown.Toggle variant="success"  >
    {props.name}
    </Dropdown.Toggle>  
    {ListBreedItem()}
  </Dropdown>
}
