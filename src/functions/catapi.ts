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
  const catsByBreed = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${bid}&limit=12&page=1`)
  console.log(catsByBreed)
  return catsByBreed
}
export const getCatDetails = async (cid:any):Promise<any> =>{
  const catDetails = await axios.get(`https://api.thecatapi.com/v1/images/${cid}`)
  const d = catDetails.data
    const detail =  {
        'name':d.breeds[0].name,
        'img':d.url,
        'temperament':d.breeds[0].temperament,
        'description':d.breeds[0].description,
        'origin':d.breeds[0].origin,
        'id':d.id
      }
  
  return detail
}
export const loadMoreCats = ()=>{}
