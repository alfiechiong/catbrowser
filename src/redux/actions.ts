import store from './store'
import {SET_LIST_OF_CAT_BREEDS, SET_CATS_BY_BREED } from './types'
import { listBreed } from '../functions/catapi';

export const setListOfCatBreed = async ():Promise<void>=>{
    const data = await listBreed()
    store.dispatch({
        type:SET_LIST_OF_CAT_BREEDS,
        payload:data
    })
}

export const setCatByBreed = (data:any):void=>{
    store.dispatch({
        type:SET_CATS_BY_BREED,
        payload:data
    })
}

