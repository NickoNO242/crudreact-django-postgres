import { useEffect, useState } from "react";
import * as CompanyServer from './CompanyServer'
import ComponentItem from './ComponentItem'
import Navbar from "../Navbar/Navbar";
function CompanyList() {
    const [companies, setCompanies] =useState([])
    const listCompanies= async()=>{
    try{
        const res= await CompanyServer.listCompanies(); 
        const data= await res.data
        setCompanies(data.companies)
    }catch(error){
        console.log(error)
    }}

    useEffect(()=>{
        listCompanies()
    },[]);

   return(
    <div className='container my-4'>
        <Navbar />
        <div className="row">
        {companies.map((company) => (
            <ComponentItem key={company.id} company={company}/>
        ))}
    </div>
      </div>
   
   )
}

export default CompanyList;























































































































































  