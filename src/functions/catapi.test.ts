import {listBreed,listCatByBreed,getCatDetails} from './catapi'
describe('catapi',()=>{
    test('listBreed apis should be defined', ()=>{
        expect(listBreed()).toBeDefined()
    })

    test('listCatByBreed function should be defined', ()=>{
        expect(listCatByBreed('hima')).toBeDefined()
    })

    test('getCatDetails function should be defined', ()=>{
        expect(getCatDetails('asdad')).toBeDefined()
    })
})

export {}