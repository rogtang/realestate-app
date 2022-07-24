import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url)=> {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '02f452b098mshbeb1a53ff5f47a7p129c48jsnb1cb78d3a166',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}