export interface ImainReducer {
    cats:IbreedsStates
}

export interface IbreedData{
    id:string,
    name:string
}

export interface IbreedsStates {
    breeds:Array<IbreedData>
    catsByBreed:Array<any>
}