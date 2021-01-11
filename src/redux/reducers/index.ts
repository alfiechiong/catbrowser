import {combineReducers} from 'redux'
import {catReducer} from './catReducer'
import {ImainReducer} from '../../common/interfaces'

const mainReducer = combineReducers<ImainReducer>({
    cats:catReducer
})

export default mainReducer