export interface ImainReducer {
    cats:IbreedsStates
}

export interface IbreedData{
    id:string,
    name:string
}

export interface Idetails{
    name:string
    img:string
    description:string
    origin:string
    id:string
}

export interface IbreedsStates {
    breeds:Array<IbreedData>
    details:any
}