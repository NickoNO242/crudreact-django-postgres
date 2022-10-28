import axios from 'axios'
const API_URL='http://127.0.0.1:8000/api/companies/'

export const listCompanies = async () => {
    return await  axios.get(API_URL)
};
export const getCompany = async (companyId) => {
    return await  axios.get(`${API_URL}${companyId}`)
};
export const registerCompany = async(newCompany)=>{
    console.log(newCompany)
    return  await axios.post(
        API_URL,{
        "name": newCompany.name,
        "location": newCompany.location,
        "website": newCompany.website,
        "foundation": newCompany.foundation,
    })
    
}
export const deleteCompany = async(companyId)=>{
    
    return  await axios.delete(
    `${API_URL}${companyId}`)
    
}
// export const registerCompany = async(newCompany)=>{
//     return await fetch(API_URL,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             'name':String(newCompany.name).trim(),
//             'foundation': parseInt(newCompany.foundation),
//             'website':String(newCompany.website).trim(),
//             'location':String(newCompany.location).trim()
//         })
//     })
// }
