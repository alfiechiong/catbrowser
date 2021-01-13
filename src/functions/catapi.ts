import axios from 'axios'
export const listBreed = async ():Promise<any> =>{
    const breeds = await axios.get('https://api.thecatapi.com/v1/breeds')
    return  breeds.data.map((d:any) => {
      return {
        "id":d.id,
        "name": d.name
      }
    }
    )
}
export const listCatByBreed = async (bid:any): Promise<any> =>{
  const catsByBreed = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${bid}&limit=10&page=1`)
  return catsByBreed.data
}

