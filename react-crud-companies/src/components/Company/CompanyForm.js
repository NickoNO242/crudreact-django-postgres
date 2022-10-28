import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import * as CompanyServer from './CompanyServer'


const CompanyForm=()=>{
    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id)
    
    const initialState={id:0,name:'',foundation:'',website:'',location:''};

    const [company, setCompany]=useState(initialState);

    const handleInputChange=(e)=>{
        setCompany({ ...company, [e.target.name]: e.target.value })
    };
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            const res= await CompanyServer.registerCompany(company)
            if (res.message === 'Success'){
                setCompany(initialState)
            }
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const getCompany = async(companyId)=>{
        try{
            const res= await CompanyServer.getCompany(companyId)
            const data= await res.data;
            const {name, location, website, foundation}=data.companies;
            setCompany({name,location,website,foundation})
            console.log(data)
            // const name= data.name
            // const location= data.location
            // const website= data.website
            // const foundation= data.foundation
    
            // setCompany({name, location, website, foundation})
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(params.id){
            getCompany(params.id)
        }
        // eslint-disable-next-line
    },[])

    // const handleSubmit =async(e)=>{
    //     await axios.post(
    //         'http://127.0.0.1:8000/api/companies',{
    //         "name": company.name,
    //         "location": company.location,
    //         "website": company.website,
    //         "foundation": company.foundation,
    //     }.then((res)=>{
    //         console.log(res)
    //     }).catch((error)=>{
            
    //     }))
    // }
    
   


    return(
        <div>
            <Navbar />
            <div className='container my-4'>
            
            <hr />
            <form className="row g-3" onSubmit={handleSubmit} action='../index.js'>
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">Nombre de la Empresa</label>
                    <input type="text" name="name" id="validationDefault01" minLength='5' maxLength='50'  onChange={handleInputChange}   required ></input>
                </div>
                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Año de Fundación</label>
                    <input type="number" name="foundation" id="validationDefault02" min='1900' max='2030'  onChange={handleInputChange}   required></input>
                </div>
                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Ciudad de Creación</label>
                    <input type="text" name="location" id="validationDefault02" minLength='5' maxLength='30'  onChange={handleInputChange}  required></input>
                </div>
                
                <div className="col-md-3">
                    <label for="validationDefault05" className="form-label">Website</label>
                    <input type="text" name="website" id="validationDefault05" maxLength='100'  onChange={handleInputChange}  required></input>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                    <label className="form-check-label" for="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>

            </form>
            </div>
        </div>
        

    )
}

export default CompanyForm