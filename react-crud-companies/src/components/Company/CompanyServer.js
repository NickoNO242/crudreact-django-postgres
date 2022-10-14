import axios from 'axios'
const API_URL='http://127.0.0.1:8000/api/companies'

export const listCompanies = async () => {
    return await  axios.get(API_URL)
};

export const registerCompany = async(newCompany)=>{
    console.log(newCompany)
    return  await axios.post(
        API_URL,{
        "name": newCompany.name,
        "location": newCompany.location,
        "website": newCompany.website,
        "foundation": newCompany.foundation,
    }.then((res)=>{
        console.log(res)
    }).catch((error)=>{
        
    }))
}
