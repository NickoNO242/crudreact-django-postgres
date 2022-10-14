import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import * as CompanyServer from './CompanyServer'

const CompanyForm=()=>{
    const initialState={id:0,name:'',foundation:'',website:'',location:''};

    const [company, setCompany]=useState(initialState);

    const handleInputChange=(e)=>{
        setCompany({ ...company, [e.target.name]: e.target.value })
    };
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            console.log(company)
            const res= await CompanyServer.registerCompany(company)
            
        } catch (error) {
            console.log(error)
        }
    }

    
    return(
        <div>
            <Navbar />
            <div className='container my-4'>
            
            <hr />
            <form className="row g-3" onSubmit={handleSubmit} >
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