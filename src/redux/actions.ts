import store from './store'
import {SET_CUR_DETAIL, SET_LIST_OF_CAT_BREEDS, SET_CATS_BY_BREED } from './types'
import { listBreed, getCatDetails, listCatByBreed } from '../functions/catapi';

export const setListOfCatBreed = async ():Promise<void>=>{
    const data = await listBreed()
    store.dispatch({
        type:SET_LIST_OF_CAT_BREEDS,
        payload:data
    })
}

export const setCurDetails= async (cid:any):Promise<void>=>{
    const data = await getCatDetails(cid)
    store.dispatch({
        type:SET_CUR_DETAIL,
        payload:data
    })
}

export const setCatByBreed = async (bid:any):Promise<void>=>{
    const breed = await listCatByBreed(bid)
    store.dispatch({
        type:SET_CATS_BY_BREED,
        payload:breed.data
    })
}

