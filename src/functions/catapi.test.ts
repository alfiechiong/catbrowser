import {listBreed,listCatByBreed} from './catapi'
describe('catapi',()=>{
    test('listBreed apis should be defined', ()=>{
        expect(listBreed()).toBeDefined()
    })

    test('listCatByBreed function should be defined', ()=>{
        expect(listCatByBreed('hima')).toBeDefined()
    })
})
