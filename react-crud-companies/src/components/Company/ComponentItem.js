import * as CompanyServer from './CompanyServer'
import { useNavigate } from 'react-router-dom'
const ComponentItem=({company, listCompanies})=>{
    const navigate =useNavigate()

    const handleDelete=async (companyId)=>{
        await CompanyServer.deleteCompany(companyId)
        listCompanies()
    }
    return(
        <div className="col-md-4 mb-4">
            {company.name === undefined || company.name === "" ? (
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>) : (
            <div className="card card-body">
                <h3  ><a href={company.website}><strong>{company.name}</strong></a><button onClick={()=>navigate(`/updateCompany/${company.id}`)} className='ms-3 btn btn-sm btn-info'>Editar</button></h3>
                
                <p className="card ">La compañia {company.name}  fue fundada en el año de {company.foundation} en {company.location}</p>
            </div>  )}
            
            <button onClick={()=>company.id && handleDelete(company.id)} className='btn btn-danger my-2'>Eliminar Compañia</button>
        </div> 

    
    )
}
export default ComponentItem