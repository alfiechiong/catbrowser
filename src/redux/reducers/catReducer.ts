import {SET_LIST_OF_CAT_BREEDS,SET_CUR_DETAIL, SET_CATS_BY_BREED } from '../types'
import {IbreedsStates} from '../../common/interfaces'

const initialState = {
    breeds:[],
    details:{},
    catsByBreed:[],
}
export const catReducer:any = (state:IbreedsStates=initialState, action: { type: string; payload: any })=>{

    switch(action.type){
        case SET_LIST_OF_CAT_BREEDS:
            return {
                ...state,
                breeds:action.payload
            }
        case SET_CUR_DETAIL:
                return {
                    ...state,
                    details:action.payload
                }
        case SET_CATS_BY_BREED:
            return {
                ...state,
                catsByBreed:action.payload
            }

        default:return state
    }

}